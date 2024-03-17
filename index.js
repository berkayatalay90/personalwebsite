// Email Validation

function validateEmail(event) {
    
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailWarningWrapper = document.getElementsByClassName("email-warning-wrapper")[0];


    if (emailRegex.test(email)) {
        emailWarningWrapper.style.maxHeight = null
        console.log(email);
    } else {
        emailWarningWrapper.style.maxHeight = emailWarningWrapper.scrollHeight + "px";
        console.log("email is not valid");
        event.preventDefault();
    }
}

// Hamburger Menu for Mobile Design

// Hide the font awesome menu icons
// Close Icon X

var menuIconClose = document.getElementById('menuIconClose');
menuIconClose.classList.add("hidden");

// Open Icon
var menuIconOpen = document.getElementById("menuIconOpen");

function checkScreenWidth() {
    var width = window.innerWidth;
    var minWidth = 650;

    if (width <= minWidth) {
        menuIconOpen.classList.remove("hidden");
    } else {
        menuIconOpen.classList.add("hidden");
    }
}

// Check on page load
window.onload = checkScreenWidth;

// Check when the screen size changes
window.addEventListener('resize', checkScreenWidth);


// Toggle the icons and the navbar 

let menuIconWrapper = document.getElementsByClassName("menu-icon-wrapper");

for (let i = 0; i < menuIconWrapper.length; i++) {
    menuIconWrapper[i].addEventListener("click", function () {
        let navBar = document.getElementById("navbar");
        navBar.classList.toggle("inline-flex");
        menuIconOpen.classList.toggle("hidden");
        menuIconClose.classList.toggle("hidden");
        })
    
}


