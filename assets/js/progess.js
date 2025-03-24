// Fungsi untuk memperbarui progress bar secara dinamis
function updateProgressBars() {
    let progressBars = document.querySelectorAll(".progress-bar .progress");

    progressBars.forEach(bar => {
        let progressValue = parseInt(bar.getAttribute("data-progress"));
        bar.style.width = progressValue + "%";
        
        // Ubah warna berdasarkan persentase progress
        if (progressValue >= 70) {
            bar.style.backgroundColor = "#4CAF50"; // Hijau (Tinggi)
        } else if (progressValue >= 40) {
            bar.style.backgroundColor = "#FFC107"; // Kuning (Sedang)
        } else {
            bar.style.backgroundColor = "#F44336"; // Merah (Rendah)
        }
    });
}

// (Opsional) Load navbar & sidebar dari file terpisah
function loadComponents() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar-container").innerHTML = data);

    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data);
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    updateProgressBars();
    loadComponents(); // Opsional jika navbar & sidebar ada di file terpisah
});
