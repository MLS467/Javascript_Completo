let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let posx = document.getElementById("posx");
let posy = document.getElementById("posy");
let largura = document.getElementById("largura");
let altura = document.getElementById("altura");


const valores_q1 = q1.getBoundingClientRect();
const valores_q2 = q2.getBoundingClientRect();



const impremeValor = (valor) => {
    posx.innerHTML = `posx:${valor.x}`;
    posy.innerHTML = `posy:${valor.y}`;
    largura.innerHTML = `largura:${valor.width}`;
    altura.innerHTML = `altura: ${valor.height}`;
}

q1.addEventListener("click", (evt) => {
    impremeValor(valores_q1);
});

q2.addEventListener("click", (evt) => {
    impremeValor(valores_q2);
});


// USAR ACESSKEY CRIA UM ATALHO PARA SER USADO NO NAVEGADOR
q1.accessKey = "c";
q2.accessKey = "v";