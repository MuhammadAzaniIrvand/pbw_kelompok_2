document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("form");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email === "user@example.com" && password === "password123") {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
