import axios from "axios"

export const apiCall=(type,url,body)=>{
  let fullURL = "http://localhost:3000"
  if(type==='POST'){
    return axios.post(fullURL+url,JSON.stringify(body))
  }

}
