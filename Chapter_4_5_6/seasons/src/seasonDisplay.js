import React from "react";
//webpack will import the contents of this css file and put it into the index.html
import './seasonDisplay.css';

const seasonConfig = {
  winter:{
    text:"Burrr, it's chilly",
    iconName:'snowflake icon'
  },
  summer:{
    text:"Let's hit on the beach",
    iconName:'sun icon'
  }
}
class SeasonDisplay extends React.Component{

  state={season:''};



  getSeason(lat,month){
    console.log(month);
    console.log(lat);
    if(month>2 && month<9){
      return lat>0? 'summer':'winter';
    }else{
      return lat>0? 'winter':'summer';
    }
  }

  render(){
      const season = this.getSeason(this.props.latitude,new Date().getMonth());
      const {text,iconName} = seasonConfig[season];
      return(
        <div className={`season-display ${season}`}>
           <i className={`massive icon-left ${iconName}`}></i>
          {
            <p style={{marginBottom:'0px', fontSize:'23px'}}>{text}</p>
          }
           <i className={`massive icon-right ${iconName}`}></i>
        </div>
      );
  }
}

export default SeasonDisplay;
