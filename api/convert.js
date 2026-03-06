
import axios from "axios"

export default async function handler(req,res){

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"})
}

const API_KEY = "1bf1ad83f3d9f099cf55533d102b38749e1eee2006c50cdd77aa2d575695654e"

const {url,format}=req.body

try{

const response = await axios.get("https://back.asitha.top/api/ytapi",{
params:{
url:url,
fo: format==="mp3" ? "1":"2",
qu:"128"
},
headers:{
Authorization:`Bearer ${API_KEY}`
}
})

const data=response.data

res.status(200).json({
status:true,
title:data.title,
thumbnail:data.thumbnail,
link:data.link
})

}catch(err){

res.status(500).json({
status:false
})

}

}

