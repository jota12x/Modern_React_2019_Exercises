import React, { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={
      searchKey:''
    };
    this.updateKey=this.updateKey.bind(this);
    this.onSearchKey=this.onSearchKey.bind(this);
  }

  updateKey(evt){
    this.setState({
      searchKey:evt.target.value
    });
  }

  onSearchKey(evt){
    evt.preventDefault();
    this.props.searchKey(this.state.searchKey);
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" onSubmit={this.onSearchKey} className="ui form">
          <div className="ui field focus">
              <label htmlFor="search_input">Search Bar</label>
              <input type="text" placeholder="Search video..."
                name="search_input" className="search_input ui input"
                value={this.state.searchKey} onChange={this.updateKey}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
