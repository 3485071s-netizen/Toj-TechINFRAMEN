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
