const div_relogio = document.getElementById("div_relogio");
const timer = document.getElementById("timer");
const tmp_alarme = document.getElementById("tmp_alarme");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const div_data = document.getElementById("div_data");
let hora_alarme = document.getElementById("hora_alarme");

const audio = new Audio("audio.mp3")
audio.loop = -1;

let horaAtual = null;
let horaAlarme = null;
let Tocando = false;
let ativado = false;

const data = new Date().toLocaleDateString();
div_data.innerHTML = data;

btn_ativar.addEventListener("click", (evt) => {
    horaAtual = Date.now();
    horaAlarme = horaAtual + (tmp_alarme.value * 1000);
    let teste = new Date(horaAlarme);
    ativado = true;
    hora_alarme.innerHTML += teste.toLocaleTimeString();
});

btn_parar.addEventListener("click", () => {
    Tocando = false;
    ativado = false;
    hora_alarme.innerHTML = "";
    timer.classList.remove("alarme");
    audio.pause();
    audio.currentTime = 0;
    tmp_alarme.value = 0;
});

const relogio = () => {
    const agora = new Date();
    div_relogio.innerHTML = agora.toLocaleTimeString();
    if (ativado && !Tocando) {
        if (agora.getTime() > horaAlarme) {
            timer.classList.add("alarme");
            audio.play();
        }
    }
}

setInterval(relogio, 500);
