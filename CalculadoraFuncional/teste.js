const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".diminue")]
const div_display = document.getElementById('div_display');
const clear = document.querySelector('.clear');
const res = document.querySelector('#btn_res');
const btn_copy = document.querySelector("#btn_copy");
const fechar = document.querySelector("#fechar");
const main = document.querySelector("#main");

let sinal = false;
let virgula = false;

teclasNum.map((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false;
        if (div_display.innerHTML == '0') {
            if (evt.target.innerHTML == ',') {
                virgula = true;
                div_display.innerHTML = "0.";
            } else {
                div_display.innerHTML = evt.target.innerHTML;
            }
        } else {
            if (evt.target.innerHTML == ',' && virgula == false) {
                virgula = true;
                div_display.innerHTML += '.';
            } else if (evt.target.innerHTML != ',') {
                div_display.innerHTML += evt.target.innerHTML;
            }
        }

    })
})

teclasOp.map((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            if (div_display.innerHTML == '0') {
                sinal = true;
                div_display.innerHTML = evt.target.innerHTML;
            } else {
                sinal = true;
                div_display.innerHTML += evt.target.innerHTML;
            }
        }
    })
})

clear.addEventListener('click', () => {
    sinal = false;
    virgula = false;
    div_display.innerHTML = '0';

});


res.addEventListener('click', (evt) => {
    let resultado = eval(div_display.innerHTML);
    div_display.innerHTML = resultado;
})

btn_copy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(div_display.innerHTML);
});

fechar.addEventListener("click", () => {
    main.classList.toggle("desaparece");
    if (!(main.classList.contains('desaparece'))) {
        fechar.innerHTML = "<span class='material-symbols-outlined'>arrow_back</span></span>";
    } else {
        fechar.innerHTML = "<span class='material-symbols-outlined'>arrow_forward</span>";
    }

})