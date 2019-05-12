import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      searchKey:'',
      images:[]
    };
    this.updateSearch=this.updateSearch.bind(this);
  }

  async updateSearch(key){
    const response = await unsplash.get(`/search/photos`,{
      params:{query:key}
    });
    this.setState({searchKey:key, images:response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar updateSearch={this.updateSearch}></SearchBar>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
