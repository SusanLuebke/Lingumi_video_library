import React from 'react';

const VideoList = (props) => {
  return (
    <div className="list">
      <thead>
        <tr>
          <th>Video Title</th>
          <th>Teacher Name </th>
          <th>Video Description Tags </th>
          <th>Average User Rating</th>
        </tr>
      </thead>
      <tbody>
        {props.videos.map((video, i) => {
          return (
            <tr key={i}>
              <td>{video.videoTitle}</td>
              <td>{video.teacherName}</td>
              <td>{video.tags}</td>
              <td>{video.averageUserRating}</td>
            </tr>
          );
        })}{' '}
        :
        <tr>
          <td colSpan="10">Loading...</td>
        </tr>
      </tbody>
    </div>
  );
};

export default VideoList;
