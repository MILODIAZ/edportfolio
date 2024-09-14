const form = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "2723bad1-0026-4924-aabd-cfa3e1fe60f0",
        To: 'emilio.diaz@alumnos.ucn.cl',
        From: "emilio.diaz@alumnos.ucn.cl",
        Subject: "Message for ED",
        Body: bodyMessage
    }).then(
        message => {
            document.getElementById("spinner").classList.add("hidden");
            document.getElementById("buttonText").classList.remove("hidden");
            submitButton.disabled = false;

            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-primary'
                    }
                });
                form.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send the message. Please try again later.",
                    icon: "error",
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-primary'
                    }
                });
            }
        }
    ).catch(error => {
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("buttonText").classList.remove("hidden");
        submitButton.disabled = false;

        Swal.fire({
            title: "Error!",
            text: "There was an error sending the email. Please check your connection or try again later.",
            icon: "error",
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'bg-primary'
            }
        });
        console.error('Email sending error:', error);
    });;
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            const firstSpan = item.parentElement.getElementsByTagName("span")[0];
            firstSpan.classList.remove("hidden");

        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => { checkEmail(); });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.parentElement.getElementsByTagName("span")[0].classList.add("hidden");
            } else {
                item.parentElement.getElementsByTagName("span")[0].classList.remove("hidden");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.value.match(emailRegex)) {
        email.parentElement.getElementsByTagName("span")[0].classList.remove("hidden");
        if (email.value != "") {
            email.parentElement.getElementsByTagName("span")[0].innerText = "Enter a valid email address";
        } else {
            email.parentElement.getElementsByTagName("span")[0].innerText = "Email can´t be blank";
        }
    } else {
        email.parentElement.getElementsByTagName("span")[0].classList.add("hidden");

    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (fullName.parentElement.getElementsByTagName("span")[0].classList.contains("hidden")
        && email.parentElement.getElementsByTagName("span")[0].classList.contains("hidden")
        && phone.parentElement.getElementsByTagName("span")[0].classList.contains("hidden")
        && message.parentElement.getElementsByTagName("span")[0].classList.contains("hidden")) {
        submitButton.disabled = true;

        document.getElementById("buttonText").classList.add("hidden");
        document.getElementById("spinner").classList.remove("hidden");
        sendEmail();
        return false;
    }
});

