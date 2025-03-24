document.addEventListener("DOMContentLoaded", function () {
    // Simulasi data kursus (bisa diganti dengan fetch dari API)
    const courses = [
        {
            title: "Complete Web Development Bootcamp",
            instructor: "Jane Smith",
            progress: 75,
            img: "https://via.placeholder.com/300x180",
            link: "course-web-dev.html"
        },
        {
            title: "Python for Data Science",
            instructor: "Robert Johnson",
            progress: 35,
            img: "https://via.placeholder.com/300x180",
            link: "course-python.html"
        },
        {
            title: "UI/UX Design Fundamentals",
            instructor: "Sarah Williams",
            progress: 60,
            img: "https://via.placeholder.com/300x180",
            link: "course-ux.html"
        }
    ];

    // Ambil elemen container untuk kursus
    const courseContainer = document.querySelector(".course-cards");
    courseContainer.innerHTML = ""; // Kosongkan kontainer sebelum render ulang

    // Generate kursus secara dinamis
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
            <div class="course-thumbnail">
                <img src="${course.img}" alt="${course.title}">
            </div>
            <div class="course-details">
                <h4>${course.title}</h4>
                <p class="instructor">Instructor: ${course.instructor}</p>
                <p class="progress-text">Progress: ${course.progress}%</p>
                <div class="progress-bar" style="width: ${course.progress}%"></div>
                <button class="continue-btn" data-link="${course.link}">Continue</button>
            </div>
        `;
        courseContainer.appendChild(courseCard);
    });

    // Event listener untuk tombol "Continue"
    document.querySelectorAll(".continue-btn").forEach(button => {
        button.addEventListener("click", function () {
            const courseLink = this.getAttribute("data-link");
            window.location.href = courseLink; // Redirect ke halaman detail kursus
        });
    });
});