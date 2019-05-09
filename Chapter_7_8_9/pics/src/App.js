import React from 'react';
import './App.css';
import SearchBar from "./Searchbar";

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      searchKey:''
    };
    this.updateSearch=this.updateSearch.bind(this);
  }

  updateSearch(key){
    this.setState({searchKey:key});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar updateSearch={this.updateSearch}></SearchBar>
        <p>{this.state.searchKey}</p>
      </div>
    )
  }
}

export default App;
