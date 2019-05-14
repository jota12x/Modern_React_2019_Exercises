import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from "../api/youtube";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      searchKey:'',
      currentId:1,
      currentVideo:null,
      videos:[]
    };
    this.search=this.search.bind(this);
    this.showDetail=this.showDetail.bind(this);
  }

  async search(key){
    console.log(`search video with key ${key}`);
    const response= await youtube.get('/search',{
      params:{
        q:key
      }
    });
    console.log(response.data.items);
    this.setState({
      videos:response.data.items,
      currentVideo:response.data.items[0].snippet,
      currentId:response.data.items[0].id.videoId
    });
  }

  showDetail(video,videoId){
    console.log(video);
    this.setState({
      currentVideo:video,
      currentId:videoId
    })
  }

  render() {
    return (
      <div className="App ui container" style={{padding:10}}>
        <SearchBar searchKey={this.search} />
        <div className="App__container ui grid" style={{display:'flex',flexDirection:'row'}}>
            <div className="ten wide column" style={{display:'flex', alignItems:'center'}}>
              <VideoDetail video={this.state.currentVideo} videoId={this.state.currentId}/>
            </div>
          {
            this.state.videos && this.state.videos.length>0?
            <div className="six wide column">
              <VideoList videos={this.state.videos} showDetail={this.showDetail} />
            </div>
            :null
          }
        </div>
      </div>
    );
  }
}

export default App;
