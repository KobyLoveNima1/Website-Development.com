
(function() {
    emailjs.init('Boachie Yiadom Oduro Marfo'); // Replace 'your_user_id' with your actual user ID from EmailJS
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Generate the contact number value (a random number in this case, but it could be any unique identifier)
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_y2zgw9s', 'template_hponusv', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Your message has been sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again.');
            });
    });
}
