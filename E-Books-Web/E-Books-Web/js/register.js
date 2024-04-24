const registerData = (event) =>{
    event.preventDefault();
    const emailInput = document.getElementById("form3Example3c").value;
    const passwordInput = document.getElementById("form3Example4c").value;
    const repeatPasswordInput = document.getElementById("form3Example4cd").value;
    const errorEmailInput = document.getElementById("errorEmail");
    const errorPasswordInput= document.getElementById("errorPassword");
    const errorRepeatPasswordInput = document.getElementById("errorRepeatPassword");

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    errorEmailInput.innerText= "";
    errorPasswordInput.innerText="";
    errorRepeatPasswordInput.innerText="";
    let isValid= true;

    if (!emailRegex.test(emailInput)) {
        errorEmailInput.innerText="Please enter a valid email!";
        errorEmailInput.style.color = "red"; 
        isValid = false;
    }

    if (!passwordRegex.test(passwordInput)) {
        errorPasswordInput.innerText= "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
        errorPasswordInput.style.color = "red";
        isValid = false;
    }

    if (passwordInput !== repeatPasswordInput) {
        errorRepeatPasswordInput.innerText = "Passwords do not match.";
        errorRepeatPasswordInput.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        window.location.href ='../index.html';
    }
    

    return isValid;
}

// Gjej input-in me id "form3Example1c" (emri)
var nameInput = document.getElementById("form3Example1c", "form3ExampleSurname");

// Shto një ngjarje "input" që dëgjon ndryshimet në fushën e emrit
nameInput.addEventListener("input", function(event) {
    // Marrim vlerën e fushës së input-it
    var inputValue = event.target.value;

    // Kontrollojme secilin karakter në vlerën e fushës së input-it
    for (var i = 0; i < inputValue.length; i++) {
        // Nëse karakteri nuk është një shkronjë, largojme atë nga inputi
        if (!(/[a-zA-Z]/).test(inputValue[i])) {
            event.target.value = inputValue.slice(0, i) + inputValue.slice(i + 1);
            break;
        }
    }
});

// Gjej input-in me id "form3Example1c" (emri)
var nameInput = document.getElementById("form3ExampleSurname");

// Shto një ngjarje "input" që dëgjon ndryshimet në fushën e emrit
nameInput.addEventListener("input", function(event) {
    // Marrim vlerën e fushës së input-it
    var inputValue = event.target.value;

    // Kontrollojme secilin karakter në vlerën e fushës së input-it
    for (var i = 0; i < inputValue.length; i++) {
        // Nëse karakteri nuk është një shkronjë, largojme atë nga inputi
        if (!(/[a-zA-Z]/).test(inputValue[i])) {
            event.target.value = inputValue.slice(0, i) + inputValue.slice(i + 1);
            break;
        }
    }
});
const ageInput = document.getElementById('form3ExampleAge');

ageInput.addEventListener('input', function() {
    // Filtro inputin për të hequr shkronjat dhe karakteret e tjera që nuk janë numra
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Kufizo numrin e karaktereve në tre
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
});
