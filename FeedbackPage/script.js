document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("blur", function() {
            this.classList.add("user-interacted");
        });
    });
});

// Existing character counter script
document.getElementById("message").addEventListener("input", function () {
    let remaining = 200 - this.value.length;
    document.getElementById("message-counter").innerText = `${remaining} characters remaining`;
});

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    // Prevent default form submission (page reload)
    event.preventDefault();

    // Display success message
    document.getElementById("success-message").style.display = "block";

    // Optionally, hide the form after submission
    document.getElementById("feedback-form").style.display = "none";
});

