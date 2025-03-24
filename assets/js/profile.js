document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const profilePics = document.querySelectorAll(".profile-pic"); // Pilih semua foto profil
    const fileInput = document.getElementById("profilePicture");

    // Ambil data user dari localStorage atau gunakan default
    const userData = JSON.parse(localStorage.getItem("userProfile")) || {
        name: "Halim Elsa Putra",
        email: "halim@gmail.com",
        profilePic: "pp.jpg"
    };

    // Tampilkan data di semua elemen yang menggunakan profile-pic
    nameField.textContent = userData.name;
    emailField.textContent = userData.email;
    profilePics.forEach(img => img.src = userData.profilePic);

    // Saat user mengganti foto profil
    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePics.forEach(img => img.src = e.target.result); // Ganti semua gambar
                userData.profilePic = e.target.result; // Simpan di userData
                localStorage.setItem("userProfile", JSON.stringify(userData)); // Simpan ke localStorage
            };
            reader.readAsDataURL(file);
        }
    });

    // Saat user mengedit profil
    document.getElementById("editProfileForm").addEventListener("submit", function (e) {
        e.preventDefault();
        userData.name = document.getElementById("editName").value;
        userData.email = document.getElementById("editEmail").value;
        
        // Simpan ke localStorage
        localStorage.setItem("userProfile", JSON.stringify(userData));

        // Perbarui tampilan di halaman
        nameField.textContent = userData.name;
        emailField.textContent = userData.email;

        closeEditModal(); // Tutup modal setelah simpan
    });

    // Fungsi Logout
    document.querySelector(".logout-btn").addEventListener("click", function () {
        document.getElementById("confirmationPopup").style.display = "flex";
    });

    document.querySelector(".confirm-btn").addEventListener("click", function () {
        localStorage.removeItem("userProfile");
        window.location.href = "login.html"; // Redirect ke halaman login
    });

    function closePopup() {
        document.getElementById("confirmationPopup").style.display = "none";
    }

    function closeEditModal() {
        document.getElementById("editProfileModal").style.display = "none";
    }
});
