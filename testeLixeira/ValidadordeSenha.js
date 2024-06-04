'use strict'

let senha = "maisson.silva@gmail.com"
let teste = [];
let flag = -1;

for (let i = senha.length - 1; i >= 0; i--) {
    teste.unshift(senha[i]);
}

for (let i of teste) {

    if (typeof iterator === "string" && iterator != "@" && iterator != ".") {

        if (iterator == iterator.toUpperCase()) {
            flag = 1;
            break;
        } else {
            flag = 0;
        }
    }
}

let validarSenha = (x, y) => {
    let testaPonto = x.indexOf('.');
    let testaArroba = x.indexOf('@');

    if (x.length < 8) {
        console.log("Pelo menos 8 caracteres de comprimento!");
    } else if (testaPonto == -1 || testaArroba == -1) {
        console.log("Deve usar @ ou . !");
    } else if (y == 0) {
        console.log("A senha deve conter pelo menos uma letra maiúscula.");
    } else {
        console.log("Tudo certo!");
    }
}


validarSenha(teste, flag);




