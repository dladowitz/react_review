import React from 'react';

const VideoListItem = (props) => {
  console.log("VideoItem: ", props['video'])
  const video = props['video']
  return (
    <li id={video['etag']}>
      <div><strong>{video['snippet']['title']}</strong></div>
      <div>{video['snippet']['description']}</div>
      <div><em>{video['snippet']['thumbnails']['default']['url']}</em></div>
      <br />
    </li>
  );
};


export default VideoListItem;
