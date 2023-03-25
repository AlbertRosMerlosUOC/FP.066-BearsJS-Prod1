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
    <button type="button" class="btn btn-primary agree">Agregar tarjeta</button>
    <button type="button" class="btn btn-primary delete" id="delete" data-bs-toggle="modal" data-bs-target="#myModalQuit">Quitar tarjeta</button>
    `;

  // Agregar la tarjeta al contenedor
  cardContainer.appendChild(card);

  // Limpiar los valores del formulario
  form.reset();

  // Cerrar el modal después de agregar la tarjeta
  const modal = document.querySelector("#myModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();

  // Funcionalidad de quitar tarjeta (lanza modal de confirmacion)
  const quitCard = card.querySelector(".delete");

  quitCard.addEventListener("click", () => {
    const modalQuit = document.querySelector("#myModalQuit");
    const modalInstance = bootstrap.Modal.getInstance(modalQuit);
    modalInstance.show();

    // Funcionalidad de quitar tarjeta (elimina tarjeta)
    const QuitCard = document.querySelector("#QuitCard");
    QuitCard.addEventListener("click", () => {
      modalInstance.hide();
      if (card.parentNode) {
        tareaEliminada(card);
      }
    });
  });
  //Elimina el elemento padre del elemento que se haya seleccionado
  function tareaEliminada(element) {
    element.parentNode.removeChild(element);
  }
});
