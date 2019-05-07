import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      latitude:null,
      errorMessage:null
    };
  }

  //alternate way of setting the state
  /* state = {
    latitude:'',
    errorMessage:null
  }; */

  componentDidMount(){
    const _this = this;
    navigator.geolocation.getCurrentPosition((pos)=>{
      _this.setState({latitude:pos.coords.latitude});
    }
    ,err=>_this.setState({errorMessage:err.message}));
  }

  render(){
      if(this.state.text!=='') return <div><p>Hola</p></div>;
      if(this.state.errorMessage && !this.state.latitude){
        return <div>Error: {this.state.errorMessage}</div>
      }
      if(!this.state.errorMessage && this.state.latitude){
        return <SeasonDisplay latitude={this.state.latitude}/>
      }
      return <Spinner message="Please accept location request"/>;
  }
}

ReactDOM.render(<App />,document.querySelector('#root'));
