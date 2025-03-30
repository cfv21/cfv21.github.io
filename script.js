// Simple form submission handling
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    
    // Here you would normally send this data to your backend
    console.log('Form submitted:', { email, name });
    
    // Show success message
    alert('Thank you for joining the waitlist!');
    
    // Reset form
    this.reset();
});

// Add some subtle parallax effect to the background dots
document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelector('.background-dots').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
