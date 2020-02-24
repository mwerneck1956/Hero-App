import Axios from "axios";


const api = Axios.create({
  baseURL: "http://" +  "akabab.github.io/superhero-api/api",  
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default api;