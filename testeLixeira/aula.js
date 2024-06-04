let caixa = window.document.querySelector('#parent');
let novosElem = ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL', 'BD', 'PYTHON']
let lixeira;

let addListerner = (...x) => {
    x.map((ele) => {
        lixeira.addEventListener('click', (evt) => {
            caixa.removeChild(ele)

        });
        x.map((el) => {
            el.addEventListener('click', (evt) => {
                evt.target.classList.toggle('importante');
            });

        });

    });
}

novosElem.map((el, i) => {
    let novoElem = document.createElement("div");
    novoElem.setAttribute("id", "div" + (i + 1));
    novoElem.setAttribute("class", "curso c1");
    novoElem.innerHTML = el;

    lixeira = document.createElement("img");
    lixeira.setAttribute("class", "ajustado")
    lixeira.setAttribute("src", "../img/54324.png")
    novoElem.appendChild(lixeira);

    addListerner(novoElem);
    caixa.appendChild(novoElem);
});





