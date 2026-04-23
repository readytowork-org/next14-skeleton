'use client'

export default function VideoUploadModal({
  open,
  closeUpload,
  onUpload,
  uploadState,
  updateField,
}) {
  if (!open) return null

  return (
    <div className="modal-overlay" onClick={closeUpload}>
      <div
        className="modal panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="panel-title-row">
          <h2>Add video</h2>
          <button type="button" className="ghost-btn" onClick={closeUpload}>
            Close
          </button>
        </div>
        <form className="upload-form" onSubmit={onUpload}>
          <label>
            Title
            <input
              value={uploadState.form.name}
              onChange={(e) => updateField('name', e.target.value)}
            />
          </label>
          <label>
            Description
            <textarea
              value={uploadState.form.description}
              onChange={(e) => updateField('description', e.target.value)}
              rows={4}
            />
          </label>
          <label>
            Privacy
            <select
              value={uploadState.form.privacy}
              onChange={(e) => updateField('privacy', e.target.value)}
            >
              <option value="nobody">nobody (private)</option>
              <option value="unlisted">unlisted</option>
              <option value="anybody">anybody (public)</option>
            </select>
          </label>
          <label>
            Video file
            <input name="file" type="file" accept="video/*" />
          </label>
          {uploadState.error && <p className="error">{uploadState.error}</p>}
          <button type="submit" disabled={uploadState.busy}>
            {uploadState.busy ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  )
}
