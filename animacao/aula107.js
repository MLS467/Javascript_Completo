let carro = document.getElementById("carro");
let btn_dir = document.getElementById('btn_direita');
let btn_esq = document.getElementById('btn_esquerda');
let btn_parar = document.getElementById('btn_parar');
let valor = 0;
let res;
let valorW = parseInt(window.innerWidth);

window.addEventListener("resize", () => {
    valorW = parseInt(window.innerWidth);
});


let init = () => {
    carro.style = " background-color: #f00;height: 40px;width:100px";
    carro.style.position = "relative";
    carro.style.left = `${0}px`
}

let car = parseInt(carro.style.width);

console.log(car)
window.document.addEventListener("load", init());

let direcao = (dir) => {
    valor = parseInt(carro.style.left);
    if (valor >= (valorW - 100)) {
        clearTimeout(res);
        dir = -1;
    } else if (valor <= 0) {
        clearTimeout(res);
        dir = 1;
    }
    valor += (50 * dir);
    carro.style.left = `${valor}px`;
    res = setTimeout(direcao, 0, dir);
}

btn_dir.addEventListener("click", (evt) => {
    direcao(1);
});

btn_parar.addEventListener("click", parar);

function parar() {
    clearTimeout(res);
}


// -> aumentar carro 