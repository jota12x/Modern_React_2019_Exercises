import React, { Component } from 'react';

class VideoItem extends Component{

  constructor(props){
    super(props);
    this.showDetail=this.showDetail.bind(this);
  }
  showDetail(){
    this.props.showDetail(this.props.video,this.props.videoId);
  }

  render() {
    return (
      <div className="video_item item" style=
        {{display:'flex',width:'100%',justifyContent:'center', alignItems:'center', marginBottom:'10px',
        paddingBottom:'10px', cursor:'pointer'}}
        onClick={this.showDetail}>
        <img className="ui image" src={this.props.video.thumbnails.medium.url} alt={this.props.video.title}
          style={{maxWidth:'180px'}} />
        {
          /*
            <div style={{display:'flex',flex:1}}>
            <img className="ui avatar image" src={this.props.video.thumbnails.medium.url} alt={this.props.video.title}/>
          </div>
          */
        }

        <div className="content" style={{display:'flex',flex:1,padding:10, justifyContent:'center'}}>
          <div className="header">{this.props.video.title}</div>
        </div>
      </div>
    );
  }
}

VideoItem.defaultProps = {
  video:null,
  videoId:0
};
export default VideoItem
