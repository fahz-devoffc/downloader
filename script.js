
async function convert(){

let url=document.getElementById("ytlink").value
let format=document.getElementById("format").value

document.getElementById("loading").innerText="Converting..."

try{

let res=await fetch("/api/convert",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url,format})
})

let data=await res.json()

document.getElementById("loading").innerText=""

if(data.status){

document.getElementById("videoInfo").innerHTML=`
<img src="${data.thumbnail}">
<h3>${data.title}</h3>
`

document.getElementById("result").innerHTML=
`<a href="${data.link}" target="_blank">Download</a>`

}else{

document.getElementById("result").innerText="Convert gagal"

}

}catch(err){

document.getElementById("loading").innerText=""
document.getElementById("result").innerText="Server error"

}

}
