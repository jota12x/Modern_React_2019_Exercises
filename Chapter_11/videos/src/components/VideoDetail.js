import React, { Component } from 'react';

class VideoDetail extends Component{

  render() {
    return (
      <div className="video_detail" style={{padding:'10px', display:'flex',justifyContent:'center',alignItems:'center'}}>
        {
          this.props.video?
          <div>
            <div className="ui embed">
              <iframe
                    width="560px"
                    height="560px"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}
                    title={this.props.video.title}>
              </iframe>
            </div>
            <div className="ui segment" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
              <h4 className="ui header" style={{textAlign:'center'}}>{this.props.video.title}</h4>
              <p style={{textAlign:'center'}}>{this.props.video.description}</p>
            </div>
          </div>
          :null
        }
      </div>
    );
  }
}

VideoDetail.defaultProps = {
  video : null,
  videoId:0
};
export default VideoDetail;
