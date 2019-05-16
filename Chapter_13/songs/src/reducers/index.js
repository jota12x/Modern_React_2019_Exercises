import { combineReducers } from 'redux';

const songsReducer = () => {
  return[
    {title:'Colors',duration:'02:15'},
    {title:'Asterisk',duration:'03:15'},
    {title:'Haruka Kanata',duration:'02:20'},
    {title:'Sotsugyou desu ne',duration:'04:25'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
  if(action.type==="SONG_SELECTED"){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({songs:songsReducer,selectedSong:selectedSongReducer});
