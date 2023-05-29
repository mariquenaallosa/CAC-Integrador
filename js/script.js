const divResult = document.getElementById("totalPagar");
//console.log(divResult);
const btnSummary = document.getElementById("btnSummary");
//console.log(btnSummary);
const btnDelete = document.getElementById("btnDelete");
//console.log(btnDelete);
const form = document.getElementById("form-publicidad");
//console.log(form);

const discountCategory = {
    Malabarista: 0.80,
    Acróbata: 0.50,
    Domador: 0.15,
};

btnSummary.addEventListener("click", (e) => {
    e.preventDefault();
    
    const cantidad = parseInt(form["cantidad"].value);
    const categoria = form["categoria"].value;
    const total = cantidad * 2000;


    const totalToPay = total - (total * discountCategory[categoria]);
    document.getElementById("totalPagarSpan").innerText = totalToPay;

    divResult.style.display = "block";
});

btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    divResult.style.display = "none";
    form.reset();
});