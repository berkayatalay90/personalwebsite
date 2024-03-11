// Email Validation

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailWrapper = document.getElementsByClassName("email-warning-wrapper")[0];

    if (emailRegex.test(email)) {
        console.log("Email is valid");
        console.log(email);
        emailWrapper.classList.add("hidden");
    } else {
        emailWrapper.classList.remove("hidden")
    }
}

console.log(email);