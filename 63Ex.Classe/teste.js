"use strict"
const nome = document.querySelector('#nome');
const Portas = document.querySelector('#Portas');
const Blindagem = document.querySelector('#Blindagem');
const Municao = document.querySelector('#Municao');
const btnAdd = document.querySelector('#btnAdd');
const res = document.querySelector('#res');
const radio = [...document.querySelectorAll("input[type=radio]")];
const militar = radio[0];
const Normal = radio[1];
const output = document.getElementById('output');
let contador = 1;



let limpaCampo = () => {
    setTimeout(() => {
        nome.value = "";
        nome.setAttribute('placeholder', 'Digite o nome')
        Portas.value = "";
        Portas.setAttribute('placeholder', 'Nº de portas')
        Blindagem.value = "";
        Blindagem.setAttribute('placeholder', '0')
        Municao.value = "";
        Municao.setAttribute('placeholder', '0')
        output.innerHTML = "";
    }, 3000);

}



class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getportas() {
        return this.portas;
    }

    setportas(portas) {
        this.portas = portas;
    }

}


class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
    }
    getBlindagem() {
        return this.blindagem;
    }

    setBlindagem(blindagem) {
        this.blindagem = blindagem;
    }

    getMunicao() {
        return this.municao;
    }

    setMunicao(municao) {
        this.municao = municao;
    }

}

let adicionaExcluir = (valor) => {

    let exclui = valor.lastChild;
    exclui.addEventListener("click", (evt) => {
        valor.remove(valor);
        output.innerHTML = 'EXCLUIDO COM SUCESSO'
        limpaCampo();

    })

    return valor;
}


let OutputRes = (valor) => {
    let novaDiv = document.createElement('div');
    novaDiv.setAttribute('class', 'paraDiv');
    let img = document.createElement('img');
    img.setAttribute('src', '../img/54324.png');
    img.setAttribute('class', 'img');
    novaDiv.innerHTML = `COD:<strong> ${contador}</strong>`;
    novaDiv.innerHTML += `NOME:<strong> ${valor.getNome()}       </strong>`;
    novaDiv.innerHTML += `        PORTAS:<strong> ${valor.getportas()}     </strong>`;
    if (militar.checked) {
        novaDiv.innerHTML += `    BLINDAGEM:<strong> ${valor.getBlindagem()}      </strong>`;
        novaDiv.innerHTML += `    MUNIÇÃO:<strong> ${valor.getMunicao()}      </strong>`;
    }
    novaDiv.appendChild(img);
    contador++;

    return novaDiv;

}


militar.addEventListener('click', (evt) => {
    Blindagem.removeAttribute('disabled');
    Municao.removeAttribute('disabled');
    limpaCampo();

})

Normal.addEventListener('click', (evt) => {
    Blindagem.setAttribute('disabled', 'disabled');
    Municao.setAttribute('disabled', 'disabled');
    limpaCampo();

})

btnAdd.addEventListener('click', (evt) => {

    if (!(nome.value.trim() && Portas.value.trim())) {
        output.innerHTML = 'PREENCHA OS CAMPOS NOME E PORTAS!'
        output.setAttribute('class', 'red');
        limpaCampo();
    } else {
        let classeMilitar = new Militar(nome.value, Portas.value, Blindagem.value, Municao.value);
        let saida = OutputRes(classeMilitar);
        saida = adicionaExcluir(saida)
        res.appendChild(saida);
        limpaCampo();
        output.innerHTML = 'ADICIONADO COM SUCESSO!'
        output.setAttribute('class', 'gree');
        limpaCampo();
    }

})

