import React from "react";
import VideoItem from './videoItem';
const VideoList = (props) => {
   const renderdList= props.videos.map((video)=>{
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video}/>
    })
  return <div className='ui relaxed divided list'>{renderdList}</div>;
};
export default VideoList;
