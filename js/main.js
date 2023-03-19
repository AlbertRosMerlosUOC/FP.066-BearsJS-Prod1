// Seleccionar el formulario y el contenedor de la tarjeta
const form = document.querySelector("#myForm");
const cardContainer = document.querySelector("#cardContainer");

// Agregar un escuchador de eventos para el formulario
form.addEventListener("submit", (event) => {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Capturar los valores de los campos de entrada
  const week = document.querySelector("#weekInput").value;
  const year = document.querySelector("#yearInput").value;
  const desc = document.querySelector("#descInput").value;
  const color = document.querySelector("#colorInput").value;

  // Crear un nuevo elemento HTML para la tarjeta
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = color;
  card.innerHTML = `
    <h2>Week ${week}, ${year}</h2>
    <p>${desc}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Eliminar</button>
    <button type="button" class="btn btn-primary" onclick="window.location.href='html/dashboard.html'">Consultar</button>
  `;

  // Agregar la tarjeta al contenedor
  cardContainer.appendChild(card);

  // Limpiar los valores del formulario
  form.reset();

  // Cerrar el modal después de agregar la tarjeta
  const modal = document.querySelector("#myModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
});
