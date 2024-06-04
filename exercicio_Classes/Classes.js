"use strict"
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    info() {
        return `nome: ${this.nome} e idade: ${this.idade}`
    }
    getNome() { return this.nome; }

    setNome(nome) { this.nome = nome; }

    getIdade() { return this.idade; }

    setIdade(idade) { return this.idade = idade; }
}


const btn = document.getElementById('btn');
const caixa = document.querySelector("#caixa");

let imprimeNaTela = (dado) => {
    let novoEle = document.createElement('div');
    novoEle.setAttribute('class', 'bd separa');
    novoEle.innerHTML = `Nome: <strong>${dado.getNome()}</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Idade: <strong>${dado.getIdade()}</strong> anos <br> `;
    caixa.appendChild(novoEle);
}

btn.addEventListener('click', () => {

    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');


    if (nome.value == "" || idade.value == "") {
        alert("O campo não deve ser vazio!");
    } else {
        let novaPessoa = new Pessoa(nome.value, idade.value);
        imprimeNaTela(novaPessoa);
        nome.value = "";
        idade.value = "";
        nome.focus();

    }
});