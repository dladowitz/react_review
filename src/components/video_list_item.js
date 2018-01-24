import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => { // same as (video = props.video )


  const imageUrl = video.snippet.thumbnails.default.url
  const title = video.snippet.title

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div classNmae="video-list media">
        <div className="media-left">
            <img
              className="media-object"
              src={imageUrl}
            />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>

      <br />
    </li>
  );
};


export default VideoListItem;
