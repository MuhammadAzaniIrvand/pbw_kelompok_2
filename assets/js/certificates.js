document.addEventListener("DOMContentLoaded", function () {
    // Simulasi data sertifikat (bisa diganti dengan fetch dari API)
    const certificates = [
        {
            title: "Web Development Bootcamp",
            issuedBy: "EdemyX",
            img: "https://via.placeholder.com/300x200",
            file: "certificates/web-dev.pdf"
        },
        {
            title: "Python for Data Science",
            issuedBy: "EdemyX",
            img: "https://via.placeholder.com/300x200",
            file: "certificates/python-data-science.pdf"
        },
        {
            title: "UI/UX Design Fundamentals",
            issuedBy: "EdemyX",
            img: "https://via.placeholder.com/300x200",
            file: "certificates/ui-ux-design.pdf"
        }
    ];

    // Ambil elemen container untuk sertifikat
    const certificateContainer = document.querySelector(".certificate-cards");
    certificateContainer.innerHTML = ""; // Kosongkan kontainer sebelum render ulang

    // Generate sertifikat secara dinamis
    certificates.forEach(cert => {
        const certCard = document.createElement("div");
        certCard.classList.add("certificate-card");
        certCard.innerHTML = `
            <img src="${cert.img}" alt="${cert.title}">
            <h4>${cert.title}</h4>
            <p>Issued by: ${cert.issuedBy}</p>
            <button class="download-btn" data-file="${cert.file}">Download</button>
        `;
        certificateContainer.appendChild(certCard);
    });

    // Event listener untuk tombol "Download"
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function () {
            const fileLink = this.getAttribute("data-file");
            window.open(fileLink, "_blank"); // Buka file PDF di tab baru
        });
    });
});