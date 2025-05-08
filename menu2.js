document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul.menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
  
    // Abrir/cerrar menú principal
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('active');
    });
  
    // Abrir/cerrar submenu en móvil
    dropdownToggle.addEventListener('click', (e) => {
      // Solo en móvil
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  
    // Cerrar menú al hacer clic en cualquier enlace
    const links = document.querySelectorAll('nav ul.menu a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
        dropdown.classList.remove('active');
      });
    });
  });
  