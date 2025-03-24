document.addEventListener("DOMContentLoaded", function () {
    const profilePics = document.querySelectorAll(".profile-pic"); // Pilih semua elemen gambar profil
    const fileInput = document.getElementById("profilePicture");

    // Ambil data user dari localStorage atau gunakan default jika belum ada
    let userData = JSON.parse(localStorage.getItem("userProfile")) || {
        profilePic: "../assets/images/profile.jpg" // Gambar default jika user belum mengganti
    };

    // Fungsi untuk memperbarui semua foto profil (navbar, dashboard, admin)
    function updateProfileImages(src) {
        profilePics.forEach(img => img.src = src);
    }

    // Saat halaman dimuat, gunakan gambar terbaru dari localStorage
    updateProfileImages(userData.profilePic);

    // Saat user mengganti foto profil
    if (fileInput) {
        fileInput.addEventListener("change", function (event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const newImage = e.target.result; // Simpan dalam format Base64
                    updateProfileImages(newImage); // Perbarui semua foto profil
                    userData.profilePic = newImage; // Simpan ke userData
                    localStorage.setItem("userProfile", JSON.stringify(userData)); // Simpan ke localStorage
                };
                reader.readAsDataURL(file);
            }
        });
    }
});


    // Saat user mengedit profil
    document.getElementById("editProfileForm").addEventListener("submit", function (e) {
        e.preventDefault();
        userData.name = document.getElementById("editName").value;
        userData.email = document.getElementById("editEmail").value;
        
        // Simpan perubahan ke localStorage
        localStorage.setItem("userProfile", JSON.stringify(userData));

        // Perbarui tampilan di halaman
        nameField.textContent = userData.name;
        emailField.textContent = userData.email;

        closeEditModal(); 
    });

    // Logout: Hapus data profil dari localStorage
    document.querySelector(".logout-btn").addEventListener("click", function () {
        document.getElementById("confirmationPopup").style.display = "flex";
    });

    document.querySelector(".confirm-btn").addEventListener("click", function () {
        localStorage.removeItem("userProfile"); // Hapus data pengguna
        window.location.href = "login.html"; // Arahkan ke halaman login
    });

    // Fungsi untuk menutup popup
    function closePopup() {
        document.getElementById("confirmationPopup").style.display = "none";
    }

    function closeEditModal() {
        document.getElementById("editProfileModal").style.display = "none";
    }

