
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
