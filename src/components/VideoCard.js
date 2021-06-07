import React from 'react';

// Creates a video card carousel; alternative option to table

const VideoCard = (props) => {
  return (
    <div className="card-container">
      <div className="desc">
        {/* <img src={require('./assets/video.thumbnail.jpg').default} alt="icon" /> */}
        <h2>Video Title: {props.videoTitle}</h2>
        <h3>Teacher Name: {props.teacherName}</h3>
        <p>Video Description Tags: {props.tags}</p>
        <p>Average User Rating: {Number(props.averageUserRating).toFixed(3)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
