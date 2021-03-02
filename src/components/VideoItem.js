import "../Styling/VideoItem.css";
import React from "react";

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
