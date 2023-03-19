// Seleccionar el formulario y el contenedor de la tarjeta
const form = document.querySelector("#myForm");
const cardContainer = document.querySelector("#unassignedTasks");

// Agregar un escuchador de eventos para el formulario
form.addEventListener("submit", (event) => {
  // Prevenir que el formulario se envíe
  event.preventDefault();

  // Capturar los valores de los campos de entrada
  const name = document.querySelector("#nameInput").value;
  const desc = document.querySelector("#descInput").value;

  // Crear un nuevo elemento HTML para la tarjeta
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("cardTask");
  card.innerHTML = `
    <p><b>${name}</b></p>
    <p>${desc}</p>
    <div class="taskButtonsDiv">
      <button type=\"button\" class=\"btn btn-success xx-small\" data-bs-toggle=\"modal\" data-bs-target=\"#newTask\"><i class="fa fa-edit fa-lg"></i></button>
      <button type=\"button\" class=\"btn btn-danger xx-small btn-deleteTask\"><i class="fa fa-trash-o fa-lg"></i></button>
    </div>
  `;

  // Obtener el segundo botón dentro del elemento "card"
  const deleteTask = card.querySelector(".btn-deleteTask");

  // Agregar un controlador de eventos "click" al segundo botón
  deleteTask.addEventListener("click", () => {
    // Obtener el elemento "div" que contiene el botón y eliminarlo
    const cardContainer = deleteTask.closest(".card");
    if (confirm("¿Está seguro/a de querer eliminar la tarea?")) {
      cardContainer.remove();
    }
  });

  // Agregar atributo "draggable" al elemento "card"
  card.setAttribute("draggable", true);

  // Agregar controladores de eventos para eventos de arrastrar y soltar
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);

  function dragStart() {
    // Establecer el efecto de arrastrar
    this.classList.add("dragging");
  }

  function dragEnd() {
    // Restablecer el efecto de arrastrar
    this.classList.remove("dragging");
  }

  // Agregar la tarjeta al contenedor
  cardContainer.appendChild(card);

  // Limpiar los valores del formulario
  form.reset();

  // Cerrar el modal después de agregar la tarjeta
  const modal = document.querySelector("#newTask");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
});

const dropDay1 = document.getElementById("day1");
const dropDay2 = document.getElementById("day2");
const dropDay3 = document.getElementById("day3");
const dropDay4 = document.getElementById("day4");
const dropDay5 = document.getElementById("day5");
const dropDay6 = document.getElementById("day6");
const dropDay7 = document.getElementById("day7");
const dropUnassigned = document.getElementById("unassignedTasks");

// Agregar controladores de eventos para eventos de arrastrar y soltar
dropDay1.addEventListener("dragover", dragOver);
dropDay1.addEventListener("drop", drop);
dropDay2.addEventListener("dragover", dragOver);
dropDay2.addEventListener("drop", drop);
dropDay3.addEventListener("dragover", dragOver);
dropDay3.addEventListener("drop", drop);
dropDay4.addEventListener("dragover", dragOver);
dropDay4.addEventListener("drop", drop);
dropDay5.addEventListener("dragover", dragOver);
dropDay5.addEventListener("drop", drop);
dropDay6.addEventListener("dragover", dragOver);
dropDay6.addEventListener("drop", drop);
dropDay7.addEventListener("dragover", dragOver);
dropDay7.addEventListener("drop", drop);
dropUnassigned.addEventListener("dragover", dragOver);
dropUnassigned.addEventListener("drop", drop);

function dragOver(event) {
  // Prevenir el comportamiento predeterminado
  event.preventDefault();
}

function drop(event) {
  // Prevenir el comportamiento predeterminado
  event.preventDefault();

  // Obtener el elemento arrastrado
  const draggedElement = document.querySelector(".dragging");

  // Verificar en qué div se soltó el elemento y moverlo al div correspondiente
  if (event.target.id === "day1") {
    dropDay1.appendChild(draggedElement);
  } else if (event.target.id === "day2") {
    dropDay2.appendChild(draggedElement);
  } else if (event.target.id === "day3") {
    dropDay3.appendChild(draggedElement);
  } else if (event.target.id === "day4") {
    dropDay4.appendChild(draggedElement);
  } else if (event.target.id === "day5") {
    dropDay5.appendChild(draggedElement);
  } else if (event.target.id === "day6") {
    dropDay6.appendChild(draggedElement);
  } else if (event.target.id === "day7") {
    dropDay7.appendChild(draggedElement);
  } else {
    dropUnassigned.appendChild(draggedElement);
  }
}