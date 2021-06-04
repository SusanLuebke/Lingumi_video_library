import React from 'react';

const VideoCard = (props) => {
  return (
    <div className="card-container">
      <div className="desc">
        <img src='../images/video.thumbnail.jpg' alt="icon" />
        <h2>Video Title: {props.videoTitle}</h2>
        <h3>Teacher Name: {props.teacherName}</h3>
        <p>Video Description Tags: {props.tags}</p>
        <p>Average User Rating: {props.averageUserRating}</p>
      </div>
    </div>
  );
};

export default VideoCard;
