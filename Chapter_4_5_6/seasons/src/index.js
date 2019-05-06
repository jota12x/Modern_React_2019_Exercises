import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      latitude:'',
      longitude:'',
      hemisphere:'',
      errorMessage:null
    };
  }

  render(){
      navigator.geolocation.getCurrentPosition((pos)=>{
        this.setState({latitude:pos.coords.latitude,longitude:pos.coords.longitude},()=>{
          if(this.state.latitude>0){
            this.setState({hemisphere:'north'});
          }else{
            this.setState({hemisphere:'south'});
          }
        })
      },(err)=>this.setState({errorMessage:err.message}));
      return(
        <div style={{padding:10}}>
          {
            this.state.errorMessage?
            <p>Error: {this.state.errorMessage}</p>:
            <p>We are in the <b><span>{this.state.hemisphere}</span></b> hemisphere</p>
          }
        </div>
      );
  }
}

ReactDOM.render(<App />,document.querySelector('#root'));
