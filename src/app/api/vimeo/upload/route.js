import { createRequire } from 'node:module'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'

import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const require = createRequire(import.meta.url)
const { Vimeo } = require('@vimeo/vimeo')

export async function POST(request) {
  const clientId = process.env.VIMEO_CLIENT_ID
  const clientSecret = process.env.VIMEO_CLIENT_SECRET
  const accessToken = process.env.VIMEO_ACCESS_TOKEN

  if (!clientId || !clientSecret || !accessToken) {
    return NextResponse.json(
      {
        error:
          'Server missing VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET, or VIMEO_ACCESS_TOKEN',
      },
      { status: 503 }
    )
  }

  let tmpPath
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const name = formData.get('name')?.toString() || 'Upload'
    const privacyView = formData.get('privacyView')?.toString() || 'nobody'

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { error: 'Missing file field (multipart name: file)' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const safeBase = String(file.name || 'video').replace(/[^a-zA-Z0-9._-]/g, '_')
    tmpPath = path.join(os.tmpdir(), `vimeo-${Date.now()}-${safeBase}`)
    await fs.writeFile(tmpPath, buffer)

    const client = new Vimeo(clientId, clientSecret, accessToken)
    const params = {
      name,
      description: '',
      privacy: { view: privacyView },
    }

    const result = await new Promise((resolve, reject) => {
  client.upload(
    tmpPath,
    params,
    async (uri) => {
      try {
        fs.unlink(tmpPath).catch(() => {});
        // wait for transcode to finish
        const { link } = await waitForTranscodeAndGetLink(client, uri);
        resolve({
          uri,
          link,
          message: 'Upload and transcoding complete.',
        });
      } catch (err) {
        reject(err);
      }
    },
    null,
    (err) => {
      fs.unlink(tmpPath).catch(() => {});
      reject(err);
    }
  );
});

    return NextResponse.json(result)
  } catch (e) {
    if (tmpPath) {
      await fs.unlink(tmpPath).catch(() => {})
    }
    const msg = e?.message || String(e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}


const waitForTranscodeAndGetLink = (
  client,
  uri,
  interval = 3000,
  timeout = 300000
) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const checkStatus = () => {
      client.request(
        uri + '?fields=transcode.status',
        (error, body) => {
          if (error) return reject(error);

          const status = body?.transcode?.status;

          if (status === 'complete') {
            // fetch the video link after completion
            client.request(
              uri + '?fields=link',
              (err, linkBody) => {
                if (err) return reject(err);

                resolve({
                  status: 'complete',
                  link: linkBody?.link,
                });
              }
            );
            return;
          }

          if (status === 'error') {
            return reject(new Error('Transcoding failed'));
          }

          if (Date.now() - start > timeout) {
            return reject(new Error('Transcoding timeout'));
          }

          setTimeout(checkStatus, interval);
        }
      );
    };

    checkStatus();
  });
};