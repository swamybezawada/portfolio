// Highlight Active Section
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section');
//   let currentSection = '';

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 50; // Adjust for sticky header
//     if (window.scrollY >= sectionTop) {
//       currentSection = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href').includes(currentSection)) {
//       link.classList.add('active');
//     }
//   });
// });

// Toggle Menu for Small Screens
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Logo Click Redirect
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = 'https://your-portfolio-link.com';
});

// Show the "Go to Top" button when scrolling down
window.onscroll = function() {
    const goToTopButton = document.querySelector('.go-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goToTopButton.style.display = 'block';
    } else {
      goToTopButton.style.display = 'none';
    }
  };
  
  // Scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // email section
  // Initialize EmailJS
(function() {
  emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the form data via EmailJS
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your service ID and template ID
      .then(function(response) {
          console.log('Success:', response);
          alert("Thank you for your message! I'll get back to you soon.");
          document.getElementById('contact-form').reset(); // Reset the form
      }, function(error) {
          console.log('Error:', error);
          alert("Sorry, something went wrong. Please try again later.");
      });
});

  