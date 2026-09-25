
// Wait until the HTML document is ready before selecting page elements.
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-btn');
  const navigationLinks = document.querySelector('.navlinks');

  // Open or close the responsive navigation and expose its state to screen readers.
  if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
      const menuIsOpen = navigationLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(menuIsOpen));
    });

    // Close the mobile menu after a link is selected or Escape is pressed.
    navigationLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigationLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navigationLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.focus();
      }
    });
  }

  // Keep the academic demonstration forms on the page instead of sending data.
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const feedbackMessage = form.parentElement.querySelector('.flash');

      // Confirm the simulated submission and clear the completed form fields.
      if (feedbackMessage) {
        feedbackMessage.style.display = 'block';
        feedbackMessage.textContent =
          'Thank you. Your submission has been recorded for this website demonstration.';
        form.reset();
      }
    });
  });
});
