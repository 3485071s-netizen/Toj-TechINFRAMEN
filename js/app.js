const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click',() => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click',() => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});





const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav > ul');
const submenuParents = document.querySelectorAll('nav > ul > li');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Submenús en móviles
submenuParents.forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('ul');

    if (submenu) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 720) {
                // Si el submenú está cerrado, lo abrimos y evitamos la navegación
                if (!item.classList.contains('show-submenu')) {
                    e.preventDefault();

                    // Cierra otros submenús antes de abrir el actual
                    submenuParents.forEach(li => li.classList.remove('show-submenu'));

                    item.classList.add('show-submenu');
                } 
                // Si el submenú ya está abierto, NO usamos preventDefault
                // y permitimos que el enlace lleve a su href normalmente.
            }
        });
    }
});

// Cerrar menú si el usuario hace clic fuera de él
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 720 && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        submenuParents.forEach(li => li.classList.remove('show-submenu'));
    }
});


document.addEventListener('click', (e) => {
    if (window.innerWidth <= 720 && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        submenuParents.forEach(li => li.classList.remove('show-submenu'));
    }
});