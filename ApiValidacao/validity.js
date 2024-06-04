let nome = document.querySelector("#nome");
let nota = document.querySelector("#nota");
let titulo = document.querySelector("#titulo");
let erroNota = document.querySelector(".err_nota");


localStorage.setItem("numero", 28);
localStorage.setItem("nome", "Maisson");
localStorage.setItem("sobrenome", "Leal");
localStorage.setItem("email", "Maisson@teste.com");

alert(localStorage.getItem(localStorage.key(1)));

// localStorage.clear();
let token = "Lucas";

sessionStorage.setItem("nome", "Lucas")

sessionStorage.clear();

document.getElementById("btn").addEventListener("click", (evt) => {

    if (sessionStorage.getItem("nome") === token) {
        titulo.innerHTML = "BELEZA MANO VOCE ENTROU";
    } else {
        sessionStorage.setItem("nome", "Lucas");
    }

    evt.preventDefault();
})
