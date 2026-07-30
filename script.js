const url="YOUR_WEB_APP_URL";

fetch(url,{
    method:"POST",
    body:JSON.stringify({
        username:username,
        password:password
    })
})
.then(res=>res.text())
.then(data=>{
    alert("Submitted Successfully");
});
