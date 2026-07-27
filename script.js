document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const username=document.getElementById("username").value;

alert(

"Educational Demo\n\nHello "+username+

"\n\nThis demonstrates how phishing pages may ask for credentials.\nAlways verify the website URL before logging in."

);

this.reset();

});