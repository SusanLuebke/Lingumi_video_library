import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) => {
  return (
    <div className="list">
      {props.videos.map((video, i) => {
        return (
          <VideoCard // pass down info. props
            key={i}
            videoTitle={video.videoTitle}
            teacherName={video.teacherName}
            tags={video.tags}
            averageUserRating={video.averageUserRating}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
