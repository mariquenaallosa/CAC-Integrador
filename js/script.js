const divResult = document.getElementById("totalPagar");
//console.log(divResult);
const btnSummary = document.getElementById("btnSummary");
//console.log(btnSummary);
const btnDelete = document.getElementById("btnDelete");
//console.log(btnDelete);
const form = document.getElementById("form-advertising");

// Obtener referencia a los elementos del formulario
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const categorySelect = document.getElementById("category");
// Capturar los valores ingresados
const firstName = nameInput.value;
const lastName = lastNameInput.value;
const email = emailInput.value;
const quantity = parseFloat(quantityInput.value);

const discountCategory = {
  Malabarista: 0.8,
  Acróbata: 0.5,
  Domador: 0.15,
};

btnSummary.addEventListener("click", (e) => {
  if (!firstName && !lastName && !email) {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  if (!validaEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  if (quantity < 1) {
    alert("La cantidad debe ser mayor que 1.");
    return;
  }
  
    const quantity = parseInt(form["quantity"].value);
    const category = form["category"].value;
    const total = quantity * 2000;

    const totalToPay = total - total * discountCategory[category];
    document.getElementById("totalPagarSpan").innerText = totalToPay;

    divResult.style.display = "block";
  
});


const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  divResult.style.display = "none";
  form.reset();
});

// Seleccionar categoría
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

card1.addEventListener("click", (e) => {
  e.preventDefault;
  card2.classList.remove("card-selected");
  card3.classList.remove("card-selected");
  card1.classList.toggle("card-selected");

  const opcionSeleccionada = card1.dataset.option;
  form["category"].value = opcionSeleccionada;
});
card2.addEventListener("click", (e) => {
  e.preventDefault;
  card1.classList.remove("card-selected");
  card3.classList.remove("card-selected");
  card2.classList.toggle("card-selected");

  const opcionSeleccionada = card2.dataset.option;
  form["category"].value = opcionSeleccionada;
});
card3.addEventListener("click", (e) => {
  e.preventDefault;
  card1.classList.remove("card-selected");
  card2.classList.remove("card-selected");
  card3.classList.toggle("card-selected");

  const opcionSeleccionada = card3.dataset.option;
  form["category"].value = opcionSeleccionada;
});
