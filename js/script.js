const divResult = document.getElementById("totalPagar");
//console.log(divResult);
const btnSummary = document.getElementById("btnSummary");
//console.log(btnSummary);
const btnDelete = document.getElementById("btnDelete");
//console.log(btnDelete);
const form = document.getElementById("form-advertising");
//console.log(form);

console.log(form["advertising-name"]);

const discountCategory = {
    Malabarista: 0.80,
    Acróbata: 0.50,
    Domador: 0.15,
};

btnSummary.addEventListener("click", (e) => {
    e.preventDefault();
    if (true){
    const quantity = parseInt(form["quantity"].value);
    const category = form["category"].value;
    const total =  quantity * 2000;


    const totalToPay = total - (total * discountCategory[category]);
    document.getElementById("totalPagarSpan").innerText = totalToPay;

    divResult.style.display = "block";
    }
});

btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    divResult.style.display = "none";
    form.reset();
});