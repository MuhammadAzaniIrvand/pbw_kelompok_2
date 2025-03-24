const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const errors_message = document.getElementById('errors-message')

form.addEventListener('submit', (e) => {
    //e.preventDefault()

    let errors = []

    if(firstname_input){
        errors = getSignupFormsErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        errors_message.innerText = errors.join(", ")
    }
})

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

function getLoginFormErrors(email,password){
    let errors = []

    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

const allInput = [firstname_input, email_input, password_input, repeat_password_input]

allInput.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errors_message.innerText=''
        }
    })
})