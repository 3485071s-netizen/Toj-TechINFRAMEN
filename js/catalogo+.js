document.addEventListener("DOMContentLoaded", () => {
  const buscarInput = document.getElementById("buscarInput");
  const filtroCategoria = document.getElementById("filtroCategoria");
  const filtroPrecio = document.getElementById("filtroPrecio");
  const productos = document.querySelectorAll("#productos .item");

  function filtrarProductos() {
    const texto = buscarInput.value.toLowerCase();
    const categoria = filtroCategoria.value;
    const precioMax = filtroPrecio.value ? parseFloat(filtroPrecio.value) : Infinity;

    productos.forEach(producto => {
      const nombre = producto.querySelector("p").textContent.toLowerCase();
      const categoriaProducto = producto.getAttribute("data-categoria");
      const precioProducto = parseFloat(producto.getAttribute("data-precio"));

      const coincideNombre = nombre.includes(texto);
      const coincideCategoria = categoria === "" || categoriaProducto === categoria;
      const coincidePrecio = precioProducto <= precioMax;

      if (coincideNombre && coincideCategoria && coincidePrecio) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  }

  buscarInput.addEventListener("input", filtrarProductos);
  filtroCategoria.addEventListener("change", filtrarProductos);
  filtroPrecio.addEventListener("input", filtrarProductos);
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
