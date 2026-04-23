import { NextResponse } from 'next/server'

const vimeoApi = process.env.VIMEO_API
const VIMEO_HEADERS_BASE = {
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
}

export async function GET(_request, { params }) {
  const { id: raw } = await params
  const id = String(raw ?? '').replace(/\D/g, '')
  if (!id) {
    return NextResponse.json({ error: 'Invalid video id' }, { status: 400 })
  }

  const token = process.env.VIMEO_ACCESS_TOKEN
  const headers = { ...VIMEO_HEADERS_BASE }
  if (token) {
    headers.Authorization = `bearer ${token}`
  }

  try {
    const upstream = await fetch(`${vimeoApi}/videos/${id}`, { headers })
    const body = await upstream.json()

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error: body.error || body.developer_message || 'Vimeo API error',
          user_message: body.user_message,
        },
        { status: upstream.status }
      )
    }

    return NextResponse.json({
      uri: body.uri,
      name: body.name,
      description: body.description,
      link: body.link,
      embed: body.embed?.html,
      privacy: body.privacy,
      duration: body.duration,
      pictures: body.pictures,
    })
  } catch (e) {
    return NextResponse.json(
      { error: e.message || 'request failed' },
      { status: 502 }
    )
  }
}
