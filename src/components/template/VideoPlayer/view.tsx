'use client'

import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'

export default function VideoPlayer({ videoId, playerOptions = {} }) {
  const hostRef = useRef(null)

  useEffect(() => {
    const el = hostRef.current
    if (!el || videoId == null || videoId === '') return

    const id = Number(videoId)
    if (Number.isNaN(id)) return

    const player = new Player(el, {
      id,
      responsive: true,
      ...playerOptions,
    })
    
    return () => {
      player.destroy().catch(() => {})
    }
  }, [videoId])

  return <div className="vimeo-player-host" ref={hostRef} />
}
