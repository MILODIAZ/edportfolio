document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Get form field values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regular expressions for validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;

    let isValid = true;

    // Validate full name (not empty)
    if (fullName === "") {
        alert("Please enter your full name.");
        isValid = false;
    }

    // Validate email format
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Validate phone number (basic validation)
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid phone number.");
        isValid = false;
    }

    // Validate message (not empty)
    if (message === "") {
        alert("Please enter a message.");
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
