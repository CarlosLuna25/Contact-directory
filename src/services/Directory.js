import axios from "axios";
console.log(process.env.VUE_APP_server)
export default ()=>{
    axios.create(
      {
          baseURL: process.env.VUE_APP_server,
          headers:{
              Authorization: process.env.VUE_APP_authorization
          }

      }
    );
}