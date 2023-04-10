document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Collapsible navbar
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  const closeNavbar = () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarToggler.getAttribute("aria-expanded") === "true") {
        closeNavbar();
      }
    });
  });

  // Update this section if you want to add more functionality
});
