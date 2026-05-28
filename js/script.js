let saldo = 10000;
let btn500 = document.querySelector("#btn500");
let btn1000 = document.querySelector("#btn1000");
let btn1000_1 = document.querySelector("#btn1000-1");
let btn1000_2 = document.querySelector("#btn1000-2");
let btn1000_3 = document.querySelector("#btn1000-3");
let btn1000_4 = document.querySelector("#btn1000-4");
let btn2000 = document.querySelector("#btn2000");
let btn2000_1 = document.querySelector("#btn2000-1");

btn500.addEventListener("click", cobrar500);
btn1000.addEventListener("click", cobrar1000);
btn1000_1.addEventListener("click", cobrar1000);
btn1000_2.addEventListener("click", cobrar1000);
btn1000_3.addEventListener("click", cobrar1000);
btn1000_4.addEventListener("click", cobrar1000);
btn2000.addEventListener("click", cobrar2000);
btn2000_1.addEventListener("click", cobrar2000);

function actualizarBotones() {
    if (saldo < 500) {
        btn500.setAttribute("class", "btn btn-outline-danger");
    }
    if (saldo < 1000) {
        btn1000.setAttribute("class", "btn btn-outline-danger");
        btn1000_1.setAttribute("class", "btn btn-outline-danger");
        btn1000_2.setAttribute("class", "btn btn-outline-danger");
        btn1000_3.setAttribute("class", "btn btn-outline-danger");
        btn1000_4.setAttribute("class", "btn btn-outline-danger");
    }
    if (saldo < 2000) {
        btn2000.setAttribute("class", "btn btn-outline-danger");
        btn2000_1.setAttribute("class", "btn btn-outline-danger");
    }
}

function cobrar500() {
    if (saldo >= 500) {
        saldo = saldo - 500;
        document.querySelector("#saldo").textContent = saldo;
        actualizarBotones();
    }
}

function cobrar1000() {
    if (saldo >= 1000) {
        saldo = saldo - 1000;
        document.querySelector("#saldo").textContent = saldo;
        actualizarBotones();
    }
}

function cobrar2000() {
    if (saldo >= 2000) {
        saldo = saldo - 2000;
        document.querySelector("#saldo").textContent = saldo;
        actualizarBotones();
    }
}