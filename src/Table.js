import React from 'react';


const Table = ( props ) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Video Title</th>
          <th>Teacher Name</th>
          <th>Video Description Tags</th>
          <th>Average User Rating</th>
        </tr>
      </thead>
      <tbody>
        { (props.videos.length > 0) ?
          props.videos.map((video, index) => {
            return (
              <tr key={index}>
                <td>{video.videoTitle}</td>
                <td>{video.teacherName}</td>
                <td>{video.tags}</td>
                <td>{video.averageUserRating}</td>
              </tr>
            )
          }) : 
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        }
      </tbody>
    </table>
  );
};

export default Table;
