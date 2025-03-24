document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;
        const userRole = getUserRole(email, password); // Cek apakah user atau admin

        if (userRole === "admin") {
            window.location.href = "dashboard-admin.html"; // Redirect ke dashboard admin
        } else if (userRole === "user") {
            window.location.href = "user-dashboard.html"; // Redirect ke dashboard user
        } else {
            alert("Email atau password salah!");
        }
    });

    function getUserRole(email, password) {
        // Contoh daftar user (nanti bisa diganti dengan database)
        const users = [
            { email: "admin@example.com", password: "admin123", role: "admin" },
            { email: "user@example.com", password: "user123", role: "user" },
        ];

        const user = users.find((u) => u.email === email && u.password === password);
        return user ? user.role : null;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedInUser"); // Cek apakah user sudah login
    const nav = document.querySelector("nav ul");

    if (isLoggedIn) {
        nav.innerHTML = `
            <li><a href="user-dashboard.html">Dashboard</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="#" id="logout">Logout</a></li>
        `;

        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});
