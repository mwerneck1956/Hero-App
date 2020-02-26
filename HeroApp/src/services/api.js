import Axios from "axios";


const api = Axios.create({
  baseURL: "https://" +  "cdn.rawgit.com/akabab/superhero-api/0.2.0/api"
 // headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default api;