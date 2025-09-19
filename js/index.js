
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav > ul');
const submenuParents = document.querySelectorAll('nav > ul > li');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Submenú lateral
submenuParents.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 720 && item.querySelector('ul')) {
            e.preventDefault();
            // Cierra otros submenús antes de abrir el seleccionado
            submenuParents.forEach(li => {
                if (li !== item) li.classList.remove('show-submenu');
            });
            item.classList.toggle('show-submenu');
        }
    });
});

