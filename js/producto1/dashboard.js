// Seleccionar el formulario y los contenedores de la tarjetas
const form = document.querySelector("#myForm");
const dropUnassigned = document.getElementById("unassignedTasks");
const dropDay1 = document.getElementById("day1");
const dropDay2 = document.getElementById("day2");
const dropDay3 = document.getElementById("day3");
const dropDay4 = document.getElementById("day4");
const dropDay5 = document.getElementById("day5");
const dropDay6 = document.getElementById("day6");
const dropDay7 = document.getElementById("day7");
const targetCard = document.getElementById("target-card");

// Agregar controladores de eventos para eventos de arrastrar y soltar
dropUnassigned.addEventListener("dragover", dragOver);
dropUnassigned.addEventListener("drop", drop);
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

// Agregar un escuchador de evento "SUBMIT" para el formulario
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
    <div class="buttonsDiv">
      <button type="button" class="btn btn-success xx-small" data-bs-toggle="modal" data-bs-target="#newTask"><i class="fa fa-edit fa-lg"></i></button>
      <button type="button" class="btn btn-danger xx-small btn-deleteTask" data-bs-toggle="modal" data-bs-target="#myModalDelete"><i class="fa fa-trash-o fa-lg"></i></button>
    </div>
  `;

  // Obtener el segundo botón dentro del elemento "card"
  const deleteTask = card.querySelector(".btn-deleteTask");

  // Agregar un controlador de eventos "click" al segundo botón
  deleteTask.addEventListener("click", () => {
    // Obtener el elemento "div" que contiene el botón y eliminarlo
    const dropUnassigned = deleteTask.parentElement.parentElement;

    const modalDelete = document.querySelector("#myModalDelete");
    const modalInstance = bootstrap.Modal.getInstance(modalDelete);
    modalInstance.show();

    // Funcionalidad de quitar tarjeta (elimina tarjeta)
    const deleteCard = document.querySelector("#deleteCard");
    deleteCard.addEventListener("click", () => {
      modalInstance.hide();
      if (card.parentNode) {
        dropUnassigned.remove();
      }
    });
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

  // Agregar la tarjeta al contenedor que toque según el día clickado
  var tC = document.getElementById("target-card").value;
  console.log(tC);
  switch (tC) {
    case '1':
      dropDay1.appendChild(card);
      break;
    case '2':
      dropDay2.appendChild(card);
      break;
    case '3':
      dropDay3.appendChild(card);
      break;
    case '4':
      dropDay4.appendChild(card);
      break;
    case '5':
      dropDay5.appendChild(card);
      break;
    case '6':
      dropDay6.appendChild(card);
      break;
    case '7':
      dropDay7.appendChild(card);
      break;
    default:
      dropUnassigned.appendChild(card);
      break;
  }

  // Limpiar los valores del formulario
  form.reset();

  // Cerrar el modal después de agregar la tarjeta
  const modal = document.querySelector("#newTask");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
});

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

// Seleccionamos todos los elementos con la clase "button-add"
const btnAdd = document.querySelectorAll('.button-add');

// Agregamos un evento de click a cada uno de ellos
btnAdd.forEach((btn) => {
  btn.addEventListener('click', () => {
    const idDay = btn.getAttribute('target-day');
    assignTarget(idDay);
  });
});

// Definir la función que se llamará al hacer clic en los botones para añadir tareas
function assignTarget(id) {
  targetCard.value = id;
}

