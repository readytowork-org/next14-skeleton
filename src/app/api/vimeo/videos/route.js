import { NextResponse } from 'next/server'

const vimeoApi = process.env.VIMEO_API
const VIMEO_HEADERS_BASE = {
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
}

function mapVideo(video) {
  return {
    uri: video.uri,
    id: video.uri?.split('/').pop() || '',
    name: video.name || 'Untitled',
    description: video.description || '',
    link: video.link,
    duration: video.duration || 0,
    privacy: video.privacy || {},
    pictures: video.pictures || null,
    createdTime: video.created_time || null,
  }
}

export async function GET(request) {
  const token = process.env.VIMEO_ACCESS_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: 'Missing VIMEO_ACCESS_TOKEN in server environment' },
      { status: 503 }
    )
  }

  const searchParams = request.nextUrl.searchParams
  const perPage = searchParams.get('per_page') || '50'
  const page = searchParams.get('page') || '1'
  const fields = [
    'uri',
    'name',
    'description',
    'link',
    'duration',
    'privacy',
    'pictures',
    'created_time',
  ].join(',')

  const headers = {
    ...VIMEO_HEADERS_BASE,
    Authorization: `bearer ${token}`,
  }

  const url = `${vimeoApi}/me/videos?per_page=${encodeURIComponent(perPage)}&page=${encodeURIComponent(page)}&fields=${encodeURIComponent(fields)}`

  try {
    const upstream = await fetch(url, { headers })
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

    const data = Array.isArray(body.data) ? body.data.map(mapVideo) : []
    return NextResponse.json({
      data,
      total: body.total || data.length,
      page: body.page || Number(page),
      perPage: body.per_page || Number(perPage),
      paging: body.paging || null,
    })
  } catch (e) {
    return NextResponse.json(
      { error: e.message || 'Upstream request failed' },
      { status: 502 }
    )
  }
}
