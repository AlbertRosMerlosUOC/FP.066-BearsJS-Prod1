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
  const type = document.querySelector('input[name="workType"]:checked + label').textContent;
  const hourIni = document.querySelector("#iniInput").value;
  const hourEnd = document.querySelector("#endInput").value;
  const color = document.querySelector("#colorInput").value;

  const schedule = (hourIni != "" && hourEnd != "") ? "de " + hourIni + " a " + hourEnd + "h": "No especificadas horas de inicio y de fin";
  // Crear un nuevo elemento HTML para la tarjeta
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("cardWeek");
  card.style.backgroundColor = color;
  card.innerHTML = `
    <h4>Semana ${week} del año ${year}</h4>
    <p>${desc}</p>
    <p><b>Modalidad de trabajo:</b> ${type}</p>
    <p><b>Horario laboral:</b> ${schedule}</p>
    <div class="buttonsDiv">
      <button type="button" class="btn btn-success" onclick="window.location.href='./dashboard.html'"><i class="fa fa-search fa-lg"></i></button>
      <button type="button" class="btn btn-danger delete" id="delete" data-bs-toggle="modal" data-bs-target="#myModalQuit"><i class="fa fa-trash-o fa-lg"></i></button>
    </div>
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
    const deleteCard = document.querySelector("#deleteCard");
    deleteCard.addEventListener("click", () => {
      modalInstance.hide();
      if (card.parentNode) {
        tareaEliminada(card);
      }
    });
  });

  // Elimina el elemento padre del elemento que se haya seleccionado
  function tareaEliminada(element) {
    element.parentNode.removeChild(element);
  }
});
