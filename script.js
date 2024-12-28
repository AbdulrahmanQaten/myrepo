// Form submission handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '! I will get back to you soon.');
      // Reset form
      document.querySelector('form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  