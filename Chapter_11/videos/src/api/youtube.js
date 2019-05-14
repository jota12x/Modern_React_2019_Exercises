import axios from "axios";

const key = "API_KEY";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  headers:{
    'Accept': 'application/json'
  },
  params:{
    key:key,
    part:'snippet'
  }
})
