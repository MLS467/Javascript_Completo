let timer = document.getElementById('timer');
let iniciar = document.getElementById('Iniciar')
let Parar = document.getElementById('Parar');
let Zerar = document.getElementById('Zerar');
let Parcial = document.getElementById('Parcial');
let res = document.getElementById('res');

let inicializado = false;
let tempoInicial = null;
let contador = null;
let incremento = 0;
let iniciou = false;
// adiciona o zero caso o numero seja menor que 10
let addZero = (x) => {
    return x < 10 ? '0' + x : x;
}

let converte = (timestamp) => {
    let horas = Math.floor((timestamp / 3600)); // converte em horas
    let minutos = Math.floor((timestamp % 3600) / 60); // pega oresto das horas e converte p/ minutos
    let segundos = Math.floor(timestamp % 60); // pega o segundos restantes dos minutos
    let tempoformatado = `${addZero(horas)}:${addZero(minutos)}:${addZero(segundos)}`;
    return tempoformatado;
}


let cont = () => {
    let tempoAtual = Date.now();
    let tempoAtualizado = tempoAtual - tempoInicial;
    timer.innerHTML = converte(tempoAtualizado / 1000); // converte em segundos
}


iniciar.addEventListener('click', (evt) => {
    if (inicializado) {
        iniciou = true;
        contador = setInterval(cont, 1000);

    } else {
        iniciou = true;
        tempoInicial = Date.now();
        contador = setInterval(cont, 1000);
    }
})

Parar.addEventListener('click', (evt) => {
    clearInterval(contador);
    inicializado = true;
    iniciou = false;

})

Zerar.addEventListener('click', (evt) => {
    clearInterval(contador);
    timer.innerHTML = '00:00:00';
    inicializado = false;
    iniciou = false;
    let del = [...document.getElementsByClassName('parcial')];
    del.map((i) => {
        i.remove();
    })
    incremento = 0;
})

Parcial.addEventListener('click', () => {
    if (iniciou) {
        let p = document.createElement('p');
        p.setAttribute('class', 'parcial');
        incremento++;
        p.innerHTML = `Parcial numero (${incremento}) ==> ${timer.innerHTML}`
        res.appendChild(p);
    }
})

