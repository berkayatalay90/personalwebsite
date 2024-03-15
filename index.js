// Email Validation

function validateEmail() {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailWarningWrapper = document.getElementsByClassName("email-warning-wrapper")[0];


    if (emailRegex.test(email)) {
        emailWarningWrapper.style.maxHeight = null
        console.log(email);
    } else {
        emailWarningWrapper.style.maxHeight = emailWarningWrapper.scrollHeight + "px";
        econsole.log("email is not valid");
    }
}

// Hamburger Menu for Mobile Design

// Hide the font awesome menu icons
// Close Icon X

var menuIconClose = document.getElementById('menuIconClose');
menuIconClose.style.display = 'none';

// Open Icon
var menuIconOpen = document.getElementById("menuIconOpen");

function checkScreenWidth() {
    var width = window.innerWidth;
    var minWidth = 480;

    if (width <= minWidth) {
        menuIconOpen.style.display = 'block';
    } else {
        menuIconOpen.style.display = 'none';
    }
}

// Check on page load
window.onload = checkScreenWidth;

// Check when the screen size changes
window.addEventListener('resize', checkScreenWidth);




// let menuIconOpen = document.getElementById("menuIconOpen");
// let menuIconClose = document.getElementById("menuIconClose");



// menuIconOpen.addEventListener("click", function () {
//     menuIconOpen.classList.add("hidden");
//     menuIconClose.classList.toggle("hidden");
// })



