import React from 'react';

const VideoCard = (props) => {
  return (
    <div className="card-container">
      <div className="desc">
        <h2>{props.videoTitle}</h2>
        <h3>{props.teacherName}</h3>
        <p>{props.tags}</p>
        <p>{props.averageUserRating}</p>
      </div>
    </div>
  );
};

export default VideoCard;
