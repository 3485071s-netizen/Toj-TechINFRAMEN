const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav > ul');
const submenuParents = document.querySelectorAll('nav > ul > li');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

submenuParents.forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('ul');

    if (submenu) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 720) {
                if (!item.classList.contains('show-submenu')) {
                    e.preventDefault();

                    submenuParents.forEach(li => li.classList.remove('show-submenu'));

                    item.classList.add('show-submenu');
                } 
            }
        });
    }
});


document.addEventListener('click', (e) => {
    if (window.innerWidth <= 720 && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        submenuParents.forEach(li => li.classList.remove('show-submenu'));
    }
});


