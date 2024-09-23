const home = document.querySelector('#home');
const novo = document.querySelector('#novo');
const pesquisar = document.querySelector('#pesquisar');
const gestao = document.querySelector('#gestao');
const sobre = document.querySelector('#sobre');
const corpo = document.querySelector('#corpo');
const filtrar = document.querySelector('#filtrar');




home.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/home.html');
});

filtrar.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/filtrar.html');
});


novo.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/novo.html');
});

pesquisar.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/pesquisar.html');
});

gestao.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/gestao.html');
});

sobre.addEventListener('click', (evt) => {
    acessaPaginas(evt.target, '../view/sobre.html');
});


function acessaPaginas(target, url) {

    let array = [...document.querySelectorAll('.btn')];
    const valor = array.filter(e => e.getAttribute('class') === 'btn selecionado');
    valor[0].classList.remove('selecionado');
    target.classList.add('selecionado');

    window.open(url, 'if_corpo');
}