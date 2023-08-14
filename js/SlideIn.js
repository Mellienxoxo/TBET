function slideInElements() {
  const elements = document.querySelectorAll('.slide-in');

  function checkSlide() {
    elements.forEach((element) => {
      // Calculate the position of the element relative to the viewport
      const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
      // Calculate the bottom position of the element
      const elementBottom = element.offsetTop + element.offsetHeight;

      // Add the 'show' class if the element is within the viewport
      if (slideInAt > element.offsetTop && window.scrollY < elementBottom) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }

  // Call the checkSlide function initially when the page loads
  checkSlide();

  // Add the event listener to check the slide position on scroll
  window.addEventListener('scroll', checkSlide);
}

// Call the slideInElements function to enable the slide-in effect
slideInElements();
