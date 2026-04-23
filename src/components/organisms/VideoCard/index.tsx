import React from "react";
type VideCardProps = {};

const VideoCard = ({ 
  video, 
  openPlayer, 
  setMenuVideoId, 
  updatePrivacy, 
  updatingPrivacyFor, 
  menuVideoId 
}) => {
  const thumb = video.pictures?.sizes?.[2]?.link || video.pictures?.base_link;
  const isUpdating = updatingPrivacyFor === video.id;
  return (
    <div
      key={video.uri}
      className="video-item"
      onClick={() => openPlayer(video)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPlayer(video);
        }
      }}
    >
      <div className="thumb-wrap">
        {thumb ? (
          <img className="thumb" src={thumb} alt={`${video.name} thumbnail`} />
        ) : (
          <div className="thumb thumb-fallback">No thumbnail</div>
        )}
      </div>
      <div className="video-meta">
        <h3>{video.name}</h3>
        <p className="muted line-clamp">{video.description || "No description"}</p>
        <p className="privacy-chip">privacy: {video.privacy?.view || "unknown"}</p>
      </div>
      <div className="video-actions" onClick={(e) => e.stopPropagation()}>
        <button
          className="dot-btn"
          type="button"
          disabled={isUpdating}
          onClick={(e) => {
            e.stopPropagation();
            setMenuVideoId((prev) => (prev === video.id ? null : video.id));
          }}
        >
          ...
        </button>
        {menuVideoId === video.id && (
          <div className="menu">
            <button type="button" onClick={() => updatePrivacy(video, "nobody")}>
              Private
            </button>
            <button type="button" onClick={() => updatePrivacy(video, "unlisted")}>
              Unlisted
            </button>
            <button type="button" onClick={() => updatePrivacy(video, "anybody")}>
              Public
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
