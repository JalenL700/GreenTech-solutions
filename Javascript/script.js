function validateForm() {
    // Get values from the input fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");

    // Clear previous errors
    errorMsg.innerText = "";

    // Example logic: Check if username is too short
    if (username.length < 3) {
        errorMsg.innerText = "Username must be at least 3 characters long.";
        return false; // Prevents form submission
    }

    // Check if password meets criteria
    if (password.length < 8) {
        errorMsg.innerText = "Password must be at least 8 characters.";
        return false;
    }

    alert("Registration Successful!");
    return true; // Allows form to submit
}
