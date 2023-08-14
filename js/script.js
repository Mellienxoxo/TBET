
// JavaScript to add 'active' class to the clicked navigation link
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

