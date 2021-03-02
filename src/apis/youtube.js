import axios from "axios";
const KEY = "AIzaSyChrN9pM0b5xEVlWc1UpSLKG7R3XgUShYs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
