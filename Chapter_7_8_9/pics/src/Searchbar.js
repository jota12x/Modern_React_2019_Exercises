import React from 'react';
import './App.css';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      key:''
    };
    this.onSearchKey=this.onSearchKey.bind(this);
  }

  onTextChange(key){
    this.setState({key});
  }

  onSearchKey(evt){
    evt.preventDefault();
    this.props.updateSearch(this.state.key);
  }

  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearchKey}>
          <label htmlFor="field">Image Search</label>
          <input type="text" className="field" value={this.state.key} onChange={(evt)=>this.onTextChange(evt.target.value)}/>
        </form>
      </div>
    )
  }
}

SearchBar.defaultProps={
  updateSearch(){}
}

export default SearchBar;
