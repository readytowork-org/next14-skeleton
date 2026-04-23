import { useCallback, useState } from 'react'

const initialForm = {
  name: 'My video',
  description: '',
  privacy: 'nobody',
}

const initialState = {
  open: false,
  busy: false,
  error: null,
  form: initialForm,
}

export default function useVideoUpload({ loadVideos, openPlayer }) {
  const [state, setState] = useState(initialState)

  const openUpload = useCallback(() => {
    setState((prev) => ({ ...prev, open: true, error: null }))
  }, [])

  const closeUpload = useCallback(() => {
    setState((prev) => ({ ...prev, open: false, error: null }))
  }, [])

  const updateField = useCallback((key, value) => {
    setState((prev) => ({
      ...prev,
      form: {
        ...prev.form,
        [key]: value,
      },
    }))
  }, [])

  const onUpload = useCallback(
    async (e) => {
      e.preventDefault()
      const form = e.target
      const fileInput = form.querySelector('input[type="file"]')
      const file = fileInput?.files?.[0]
      if (!file) {
        setState((prev) => ({ ...prev, error: 'Choose a video file first.' }))
        return
      }

      setState((prev) => ({ ...prev, busy: true, error: null }))
      try {
        const fd = new FormData()
        fd.append('file', file)
        fd.append('name', state.form.name)
        fd.append('description', state.form.description)
        fd.append('privacyView', state.form.privacy)

        const response = await fetch('/api/vimeo/upload', {
          method: 'POST',
          body: fd,
        })
        const data = await response.json().catch(() => ({}))
        if (!response.ok) {
          throw new Error(data.error || response.statusText)
        }

        fileInput.value = ''
        setState({
          open: false,
          busy: false,
          error: null,
          form: initialForm,
        })

        await loadVideos()
        if (data.video) {
          openPlayer(data.video)
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          busy: false,
          error: error.message || 'Upload failed',
        }))
      }
    },
    [loadVideos, openPlayer, state.form.description, state.form.name, state.form.privacy]
  )

  return {
    uploadState: state,
    openUpload,
    closeUpload,
    updateField,
    onUpload,
  }
}
