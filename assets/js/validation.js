const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const errors_message = document.getElementById('errors-message')
const email_input_admin = document.getElementById('email-input-admin')
const password_input_admin = document.getElementById('password-input-admin')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload otomatis
    let errors = [];

    // Cek apakah form untuk signup (ada firstname) atau login
    if (firstname_input) {
        // Validasi pendaftaran
        errors = getSignupFormsErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);

        // Jika tidak ada error, arahkan ke halaman pendaftaran
        if (errors.length === 0) {
            window.location.href = '../root/user-dashboard.html'; // Halaman setelah pendaftaran berhasil
        }
    } else if (email_input_admin && password_input_admin) {
        // Validasi login admin
        errors = getLoginFormAdminErrors(email_input_admin.value, password_input_admin.value);
        
        if (errors.length === 0) {
            window.location.href = '../root/dashboard-admin.html'; // Halaman admin
        }
    } else if (email_input && password_input) {
        // Validasi login user biasa
        errors = getLoginFormUserErrors(email_input.value, password_input.value);
        
        if (errors.length === 0) {
            window.location.href = '../root/user-dashboard.html'; // Halaman user biasa
        }
    }
    
    // Jika ada error, tampilkan pesan
    if (errors.length > 0) {
        errors_message.innerText = errors.join(", ");
    }
});


function getSignupFormsErrors(firstname, email, password, repeat_password){
    let errors=[]

    if(firstname === '' || firstname == null){
        errors.push('firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }

    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push("Password mush have at least 8 characters")
        password_input.parentElement.classList.add('incorrect')        
    }
    if(password !== repeat_password){
        errors.push('Password doesnt match')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

function getLoginFormUserErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push("Password mush have at least 8 characters")
        password_input.parentElement.classList.add('incorrect')        
    }

    return errors;
}


function getLoginFormAdminErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('email is required')
        email_input_admin.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push("Password mush have at least 8 characters")
        password_input_admin.parentElement.classList.add('incorrect')        
    }

    return errors;
}


// Tambahkan event listener hanya untuk elemen yang ada di halaman
document.addEventListener('DOMContentLoaded', () => {
    const inputs = [firstname_input, email_input, password_input, repeat_password_input, email_input_admin, password_input_admin];
    
    inputs.forEach(input => {
        if (input) { // Cek apakah elemen ada
            input.addEventListener('input', () => {
                if(input.parentElement.classList.contains('incorrect')){
                    input.parentElement.classList.remove('incorrect')
                    errors_message.innerText=''
                }
            })
        }
    });
});