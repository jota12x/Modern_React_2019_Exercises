import React, { Component } from 'react';
import VideoItem from "./VideoItem";

class VideoList extends Component{
  render() {
    return (
      <div className="video_list ui relaxed divided list" style={{display:'flex',flexDirection:'column',padding:'10px',
        justifyContent:'center',alignItems:'center', borderLeft:'1px dotted #000'}}>
        {
          this.props.videos.map(
            video=>(
              <VideoItem key={video.etag} video={video.snippet} videoId={video.id.videoId} showDetail={this.props.showDetail} />
            )
          )
        }
      </div>
    );
  }
}

VideoList.defaultProps = {
  videos :[],
  showDetail(){}
};
export default VideoList
