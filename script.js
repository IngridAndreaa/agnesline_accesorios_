// Arreglo de productos (2.1.3)
const productos = [
  {
    nombre: "Pulsera Parejas",
    precio: 5000,
    imagen: "Images/pulsera1.PNG"
  },
  {
    nombre: "Pulsera Ojo Protector Mostacillon",
    precio: 4000,
    imagen: "Images/pulsera2.PNG"
  },
  {
    nombre: "Pulsera Ojo Protector Cristal",
    precio: 4000,
    imagen: "Images/pulsera3.PNG"
  }
];

// Función para crear el HTML de un producto (2.1.4)
function crearProductoHTML(producto) {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button class="boton">AGREGAR AL CARRITO</button>
  `;
  return div;
}

// Función para mostrar todos los productos (2.1.4)
function mostrarProductos(productos) {
  const contenedor = document.getElementById("contenedor-productos");
  productos.forEach(producto => {
    const productoHTML = crearProductoHTML(producto);
    contenedor.appendChild(productoHTML);
  });
}

// Función para mostrar mensaje al agregar al carrito (2.1.1)
function activarBotonesCarrito() {
  const botones = document.querySelectorAll(".producto button");
  botones.forEach(boton => {
    boton.addEventListener("click", function () {
      const mensaje = document.createElement("p");
      mensaje.innerText = "Producto agregado al carrito.";
      mensaje.style.color = "green";
      boton.parentElement.appendChild(mensaje);
      setTimeout(() => mensaje.remove(), 2000);
    });
  });
}

// Función para validar el formulario de suscripción (2.1.2)
function validarFormulario() {
  const formulario = document.querySelector(".formulario-email");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.querySelector(".input-text");
    const email = input.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errorExistente = document.querySelector(".mensaje-error");
    if (errorExistente) errorExistente.remove();

    if (!regex.test(email)) {
      const mensaje = document.createElement("p");
      mensaje.className = "mensaje-error";
      mensaje.innerText = "Por favor ingresa un correo válido.";
      mensaje.style.color = "red";
      input.parentElement.appendChild(mensaje);
    } else {
      alert("¡Gracias por suscribirte!");
      input.value = "";
    }
  });
}

// Ejecutar todo cuando cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos(productos);
  setTimeout(activarBotonesCarrito, 100); // pequeño retraso para asegurar que los botones existan
  validarFormulario();
});
