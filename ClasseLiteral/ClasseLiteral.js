"use strict"
let btn = document.querySelector('#btn');
let caixa = document.getElementById('caixa');

const pessoa = {
    nome,
    idade,

    getNome: function () {
        return this.nome;
    },

    setNome: function (nome) {
        return this.nome = nome;
    },

    getIdade: function () {
        return this.idade;
    },


    setIdade: function (idade) {
        return this.idade = idade;
    }
}
let novadiv = document.createElement('div');
novadiv.setAttribute('class', 'bd separa');

btn.addEventListener('click', () => {

    novadiv.innerHTML = `Nome:${pessoa.getNome()} e idade ${pessoa.getIdade()}`
    let aux = pessoa;
    caixa.appendChild(novadiv);
    mudarDiv(aux);
})


let mudarDiv = (aux) => {
    let Nome = document.querySelector("#nome");
    let Idade = document.querySelector('#idade');
    aux.setNome(Nome.value);
    aux.setIdade(Idade.value);
    novadiv.innerHTML = `Nome:${aux.getNome()} e idade ${aux.getIdade()}`
    Nome.value = "";
    Idade.value = "";
    Nome.focus();
}

