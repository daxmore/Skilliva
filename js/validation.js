const validationForLogin = () => {
    function validateForm() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "") {
            alert("Please enter your email or username.");
            return false;
        }
        if (password === "") {
            alert("Please enter your password.");
            return false;
        }
        return true;
    }
}
validationForLogin()

// JavaScript function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email/username is "user" and the password is "123"
    if (email === "user" && password === "123") {
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        // If credentials are incorrect, show an alert
        alert("Invalid email/username or password. Please try again.");
    }
}