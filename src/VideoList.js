import React from 'react';

const VideoList = (props) => {
  return (
    <table className="list">
      <thead className="title">
        <tr>
          <th>Video Title</th>
          <th>Teacher Name </th>
          <th>Video Description Tags </th>
          <th>Average User Rating</th>
        </tr>
      </thead>
      <tbody>
        {props.videos.slice().map((video, i) => {
          return (
            <tr key={i}>
              <td>{video.videoTitle}</td>
              <td>{video.teacherName}</td>
              <td>{video.tags.join(", ")}</td>
              <td>{Number(video.averageUserRating).toFixed(3)}</td>
            </tr>
          );
        })}{' '}
        <tr>
          <td colSpan="10">Searching for videos...</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VideoList;
