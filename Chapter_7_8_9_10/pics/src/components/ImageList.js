import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component{  
  render(){
    return(
      <div className="image-list">
        {
          this.props.images.map(elm=>
            <ImageCard key={elm.id} image={elm} />
          )
        }
      </div>
    )
  }
}

ImageList.defaultProps={
  images:[]
}
export default ImageList;
