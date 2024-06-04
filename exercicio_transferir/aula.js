let divs = [...document.querySelectorAll('.c1')];
let divRecebe = document.getElementById('recebe');
let btn = document.getElementById("btn");
let parent = document.querySelector('#parent');
let btn2 = document.getElementById('btn2');

divs.map((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle("importante");
    });
});

btn.addEventListener('click', () => {
    let temClasse = [...document.querySelectorAll(".importante")];
    temClasse.map((ele) => {
        divRecebe.appendChild(ele);
    });
});

btn2.addEventListener('click', () => {
    let NaoClasse = [...document.querySelectorAll(".curso:not(.importante)")];
    NaoClasse.map((el) => {
        parent.appendChild(el);
    });

});






