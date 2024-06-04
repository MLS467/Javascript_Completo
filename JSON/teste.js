const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const add = document.getElementById("adc");
const remover_last = document.getElementById("remover_last");
const remover_first = document.getElementById("remover_first");
const bd = document.getElementById("bd");
let stack = [];

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let mostraRes = () => {
    bd.innerHTML = "";
    stack.map(el => {
        bd.innerHTML += `${el}<br>`
    });
    console.log(stack)
}

add.addEventListener("click", (evt) => {
    let pes = new Pessoa(nome.value, idade.value);
    let pessoa_json = JSON.stringify(pes);
    stack.push(pessoa_json);

    mostraRes();
});

remover_last.addEventListener('click', (evt) => {
    stack.pop();
    mostraRes();
});

remover_first.addEventListener('click', (evt) => {
    stack.shift();
    mostraRes();
});