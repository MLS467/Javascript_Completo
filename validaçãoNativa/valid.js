
let nome = document.getElementById('nome');
let nota = document.getElementById('nota');
let p_msg = document.getElementById('msg');




document.getElementById('btn').addEventListener('click', (evt) => {


    if (nota.validity.valueMissing) {
        nota.setCustomValidity("O maluco, preenche ai");
    }
    nota.reportValidity(); // mostra a mensagem do setCustomValidity

    evt.preventDefault();
});

// document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
//     let estadoValidacao=f_nota.validity
//     if(estadoValidacao.valueMissing){
//         f_nota.setCustomValidity("Poxa, este campo é obrigatótio")
//     }else if(estadoValidacao.rangeOverflow){
//         f_nota.setCustomValidity("Nossa, que nota alta você digitou")
//     }else if(estadoValidacao.rangeUnderflow){
//         f_nota.setCustomValidity("Credo, que nota baixa você digitou")
//     }
//     f_nota.reportValidity()
//     // f_msg.innerHTML=f_nota.validationMessage
//     evt.preventDefault()
// })

//Métodos de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/