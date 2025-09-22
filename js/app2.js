document.addEventListener("DOMContentLoaded", () => {
  const buscarInput = document.getElementById("buscarInput");
  const filtroCategoria = document.getElementById("filtroCategoria");
  const filtroPrecio = document.getElementById("filtroPrecio");
  const productos = document.querySelectorAll("#productos .item");

  let timeout;

  function filtrarProductos() {
    const texto = buscarInput.value.toLowerCase().trim();
    const categoria = filtroCategoria.value;
    const precioMax = filtroPrecio.value ? parseFloat(filtroPrecio.value) : Infinity;

    let coincidencias = [];

    productos.forEach(producto => {
      const nombre = producto.querySelector("p").textContent.toLowerCase().trim();
      const categoriaProducto = producto.getAttribute("data-categoria");
      const precioProducto = parseFloat(producto.getAttribute("data-precio"));

      const coincideNombre = texto === "" || nombre.includes(texto);
      const coincideCategoria = categoria === "" || categoriaProducto === categoria;
      const coincidePrecio = precioProducto <= precioMax;

      if (coincideNombre && coincideCategoria && coincidePrecio) {
        producto.style.display = "block";
        coincidencias.push(producto);
      } else {
        producto.style.display = "none";
      }
    });

    if (coincidencias.length > 0) {
      coincidencias[0].scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (texto !== "" || categoria !== "" || filtroPrecio.value) {
      alert("Producto no encontrado");
      productos.forEach(producto => producto.style.display = "block");
    }
  }

  
  function debounceFiltrar() {
    clearTimeout(timeout);
    timeout = setTimeout(filtrarProductos, 700); 
  }

  buscarInput.addEventListener("input", debounceFiltrar);
  filtroCategoria.addEventListener("change", filtrarProductos);
  filtroPrecio.addEventListener("input", debounceFiltrar);

  
  buscarInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") filtrarProductos();
  });
});


