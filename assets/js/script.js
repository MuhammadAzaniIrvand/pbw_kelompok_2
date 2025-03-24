document.addEventListener('DOMContentLoaded', function() {
    // Handle Jelajahi dropdown functionality
    const exploreBtn = document.querySelector('.explore-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (exploreBtn && dropdownMenu) {
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!exploreBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }
});


// Profile data
let profileData = {
    about: "I am a passionate web developer with expertise in HTML, CSS, and JavaScript. I love creating beautiful and functional websites.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    contact: {
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        location: "New York, USA"
    }
};

// Function to toggle edit mode for different sections
function toggleEdit(section) {
    switch(section) {
        case 'about':
            editAbout();
            break;
        case 'skills':
            editSkills();
            break;
        case 'contact':
            editContact();
            break;
    }
}

// Edit About section
function editAbout() {
    const aboutText = document.getElementById('about-text');
    const currentText = aboutText.textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = currentText;
    textarea.style.width = '100%';
    textarea.style.height = '100px';
    textarea.style.marginBottom = '10px';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'edit-btn';
    saveBtn.onclick = () => {
        profileData.about = textarea.value;
        aboutText.textContent = textarea.value;
        textarea.remove();
        saveBtn.remove();
    };
    
    aboutText.parentNode.insertBefore(textarea, aboutText);
    aboutText.parentNode.insertBefore(saveBtn, aboutText);
    aboutText.style.display = 'none';
}

// Edit Skills section
function editSkills() {
    const skillsContainer = document.getElementById('skills-container');
    const currentSkills = Array.from(skillsContainer.children).map(skill => skill.textContent);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentSkills.join(', ');
    input.style.width = '100%';
    input.style.marginBottom = '10px';
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'edit-btn';
    saveBtn.onclick = () => {
        const newSkills = input.value.split(',').map(skill => skill.trim());
        skillsContainer.innerHTML = '';
        newSkills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
        profileData.skills = newSkills;
        input.remove();
        saveBtn.remove();
    };
    
    skillsContainer.parentNode.insertBefore(input, skillsContainer);
    skillsContainer.parentNode.insertBefore(saveBtn, skillsContainer);
    skillsContainer.style.display = 'none';
}

// Edit Contact section
function editContact() {
    const contactInfo = document.querySelector('.contact-info');
    const currentEmail = document.getElementById('email').textContent;
    const currentPhone = document.getElementById('phone').textContent;
    const currentLocation = document.getElementById('location').textContent;
    
    const form = document.createElement('form');
    form.innerHTML = `
        <div style="margin-bottom: 10px;">
            <input type="email" value="${currentEmail}" placeholder="Email" style="width: 100%; margin-bottom: 5px;">
        </div>
        <div style="margin-bottom: 10px;">
            <input type="tel" value="${currentPhone}" placeholder="Phone" style="width: 100%; margin-bottom: 5px;">
        </div>
        <div style="margin-bottom: 10px;">
            <input type="text" value="${currentLocation}" placeholder="Location" style="width: 100%; margin-bottom: 5px;">
        </div>
    `;
    
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'edit-btn';
    saveBtn.onclick = (e) => {
        e.preventDefault();
        const inputs = form.getElementsByTagName('input');
        document.getElementById('email').textContent = inputs[0].value;
        document.getElementById('phone').textContent = inputs[1].value;
        document.getElementById('location').textContent = inputs[2].value;
        
        profileData.contact = {
            email: inputs[0].value,
            phone: inputs[1].value,
            location: inputs[2].value
        };
        
        form.remove();
        saveBtn.remove();
        contactInfo.style.display = 'block';
    };
    
    contactInfo.style.display = 'none';
    contactInfo.parentNode.insertBefore(form, contactInfo);
    contactInfo.parentNode.insertBefore(saveBtn, contactInfo);
}

// Profile picture upload functionality
document.querySelector('.profile-image').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile-pic').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
});

// Add this at the end of script.js
document.querySelector('.logout-btn').addEventListener('click', showPopup); 

document.addEventListener("DOMContentLoaded", function () {
    const userMenu = document.querySelector(".user-menu img");
    const usernameDisplay = document.querySelector(".welcome-section h2");
    const logoutButton = document.querySelector(".user-dropdown a[href='logout.html']");

    // Ambil data dari LocalStorage
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html"; // Redirect ke login jika belum login
    } else {
        usernameDisplay.innerHTML = `Welcome back, ${loggedInUser}!`;
    }

    // Logout
    logoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html"; // Redirect ke home
    });
});
