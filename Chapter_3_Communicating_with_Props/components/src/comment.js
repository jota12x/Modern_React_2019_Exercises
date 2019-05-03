import React from "react";

class Comment extends React.Component{
  render(){
    return(
      <div className="comment">
        <a className="avatar" href="/">
          <img src={this.props.imgSource} alt={this.props.imgName}/>
        </a>
        <div className="content">
          <a className="author" href="/">{this.props.author}</a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">
            {this.props.commentText}
          </div>
          <div className="actions">
            <a className="reply" href="/">Reply</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Comment;
