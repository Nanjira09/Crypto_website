import axios from "axios";

const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_HOST,
    "x-rapidapi-key": process.env.REACT_APP_KEY,
  },
});

export default instance;
