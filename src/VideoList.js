import React from "react";

const VideoList = (props) => {
  return (
      <div className="list">
          {
            props.videos.map((video, i) => {
                return <VideoCard // pass down info. props
                            videoTitle={}
                            teacherName={}
                            tags={}
                            averageUserRating={}

                /> 
            })
          }
      </div>

  );
};

export default VideoList;