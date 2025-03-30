// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Create form data object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('message', message);
    
    // Using your Formspree endpoint
    fetch('https://formspree.io/f/xrbparob', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        } else {
            alert('Oops! There was a problem sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem sending your message. Please try again.');
    });
});

// Add some subtle parallax effect to the background dots
document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelector('.background-dots').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
