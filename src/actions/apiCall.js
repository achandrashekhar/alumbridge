import axios from "axios"

export const apiCall=(type,url,body)=>{
  console.log("this is inside API call ",body);
  let fullURL = "http://localhost:3000"
  if(type==='POST'){
    return axios({
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: fullURL+url,
      data:body,
    })
  } else if(type==='GET'){
    console.log("goes here ",fullURL+url);
    return axios.get(fullURL+url)
  }

}
