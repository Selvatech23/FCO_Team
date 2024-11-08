document.getElementById("toggle-personal-learning").addEventListener("click", function(event) {
    event.preventDefault();
    const password = prompt("Enter the password to view this section:");
    if (password === "1") {  // Replace "yourPassword" with your actual password
      document.getElementById("personal-learning-section").style.display = "block";
    } else {
      alert("Incorrect password. Access denied.");
    }
  });