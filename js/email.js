// JavaScript source code
// Initialize EmailJS with your user ID
emailjs.init('YOUR_USER_ID');

function navigateTo(url) {
    window.location.href = url;
}

function sendEmail(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            form.reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
}
