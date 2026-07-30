document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  // Show the demo alert (educational)
  alert(
    "Educational Demo\n\nHello " + username +
    "\n\nThis demonstrates how phishing pages may ask for credentials.\nAlways verify the website URL before logging in."
  );

  // Send non-sensitive demo data to Google Sheets
  try {
    await fetch("https://script.google.com/macros/s/AKfycbxfAPByykld75--6V5MH-mG3R-OIwQQX2KLxO6oiO_0eTMZtC9djBPPwHY6F-sbynTz/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        demo: true,
        consent: "user_shown_and_informed"
      })
    });

    console.log("Demo data submitted successfully.");
  } catch (err) {
    console.error("Failed to send demo data:", err);
  }

  this.reset();
});
