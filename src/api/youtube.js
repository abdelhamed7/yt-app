import Axios from "axios";
const KEY = 'AIzaSyCSZh1rvmWV2XpUQYjs1z7aBH1wFvi5Hus';
export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
