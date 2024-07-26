// write your JavaScript here
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const checkbox = document.getElementById('subscribe-checkbox').checked;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!checkbox) {
        errorMessage.textContent = 'You must agree to receive our newsletter.';
        errorMessage.style.display = 'block';
        return;
    }
    
    successMessage.textContent = 'Thank you for subscribing to our newsletter!';
    successMessage.style.display = 'block';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
