"use strict";
const ArrayTop = window.document.getElementById('ArrayTop');
const divReduzir = window.document.getElementById('divReduzir');
const res = window.document.getElementById('res');
const btnReduzir = window.document.getElementById('btnReduzir');

let testeArray = [1, 2, 3, 4, 5];
const parag = document.createElement('p')
parag.innerHTML = "<br><strong> [ " + testeArray + "]</strong>";
ArrayTop.appendChild(parag);

btnReduzir.addEventListener('click', (evt) => {
    let resultado = testeArray.reduce((anterior, atual, i) => {

        return anterior + atual;
    });
    res.children[1].innerHTML = `<br><strong> ${resultado}</strong>`;
});

