'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useMemo, useState } from 'react'
import VideoUploadModal from '../components/template/VideoUpload/view'
import useVideoUpload from '../components/template/VideoUpload/hook'
import VideoCard from '../components/organisms/VideoCard'

const VideoPlayer = dynamic(() => import('@/src/components/template/VideoPlayer/view'), {
  ssr: false,
  loading: () => <p className="muted">Loading player…</p>,
})

const defaultVideoId = '76979871'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [videosLoading, setVideosLoading] = useState(false)
  const [videosError, setVideosError] = useState(null)

  const [playerOpen, setPlayerOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const [menuVideoId, setMenuVideoId] = useState(null)
  const [updatingPrivacyFor, setUpdatingPrivacyFor] = useState(null)

  const loadVideos = useCallback(async () => {
    setVideosLoading(true)
    setVideosError(null)
    try {
      const response = await fetch('/api/vimeo/videos')
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(data.error || data.user_message || response.statusText)
      }
      setVideos(Array.isArray(data.data) ? data.data : [])
    } catch (error) {
      setVideosError(error.message || 'Failed to load videos')
    } finally {
      setVideosLoading(false)
    }
  }, [])

  useEffect(() => {
    loadVideos()
  }, [loadVideos])

  useEffect(() => {
    const close = () => setMenuVideoId(null)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [])

  const openPlayer = useCallback((video) => {
    setSelectedVideo(video)
    setPlayerOpen(true)
  }, [])

  const closePlayer = useCallback(() => {
    setPlayerOpen(false)
    setSelectedVideo(null)
  }, [])

  const { uploadState, openUpload, closeUpload, updateField, onUpload } = useVideoUpload({
    loadVideos,
    openPlayer,
  })

  const updatePrivacy = useCallback(async (video, nextPrivacy) => {
    if (!video?.id) return
    setUpdatingPrivacyFor(video.id)
    setMenuVideoId(null)
    try {
      const response = await fetch(`/api/vimeo/video/${video.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ privacyView: nextPrivacy }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(data.error || data.user_message || response.statusText)
      }
      await loadVideos()
    } catch (error) {
      setVideosError(error.message || 'Failed to update privacy')
    } finally {
      setUpdatingPrivacyFor(null)
    }
  }, [loadVideos])

  const selectedVideoId = useMemo(() => {
    if (selectedVideo?.id) return selectedVideo.id
    return String(defaultVideoId)
  }, [selectedVideo])

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Vimeo VideoList</h1>
        </div>
        <button className="btn-add" type="button" onClick={openUpload}>
          + Add
        </button>
      </header>

      <section className="panel">
        <div className="panel-title-row">
          <h2>VideoList</h2>
          <span className="muted">{videos.length} videos</span>
        </div>

        {videosLoading && <p className="muted">Loading videos...</p>}
        {videosError && <p className="error">{videosError}</p>}

        {!videosLoading && videos.length === 0 && (
          <p className="muted">No uploaded videos found for this account.</p>
        )}

        <div className="video-list">
          {videos.map((video) => {
            return (
              <VideoCard
              video={video}
              openPlayer={openPlayer} 
              setMenuVideoId={setMenuVideoId} 
              updatePrivacy = {updatePrivacy}
              updatingPrivacyFor = {updatingPrivacyFor}
              menuVideoId = {menuVideoId}
              />
            )
          })}
        </div>
      </section>

      {playerOpen && (
        <div className="modal-overlay" onClick={closePlayer}>
          <div
            className="modal panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="panel-title-row">
              <h2>{selectedVideo?.name || 'Video Player'}</h2>
              <button type="button" className="ghost-btn" onClick={closePlayer}>
                Close
              </button>
            </div>
            <div className="player-frame">
              <VideoPlayer videoId={selectedVideoId} />
            </div>
            {selectedVideo?.link && (
              <p className="modal-footer">
                <a href={selectedVideo.link} target="_blank" rel="noreferrer">
                  Open on Vimeo
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      <VideoUploadModal
        open={uploadState.open}
        closeUpload={closeUpload}
        onUpload={onUpload}
        uploadState={uploadState}
        updateField={updateField}
      />
    </div>
  )
}
