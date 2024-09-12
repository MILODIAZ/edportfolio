const form = document.querySelector("contactForm");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "emilio.diaz@alumnos.ucn.cl",
        Password: "4C6E46CE22E4B133D1630B29C6F0BBD0B029",
        To: 'emilio.diaz@alumnos.ucn.cl',
        From: "emilio.diaz@alumnos.ucn.cl",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});