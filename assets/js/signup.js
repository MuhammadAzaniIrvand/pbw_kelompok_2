document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector("form");
    
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (name && email && password) {
            alert("Sign up successful! Redirecting to login page...");
            window.location.href = "login.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});
