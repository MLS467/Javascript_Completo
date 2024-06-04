"use strict"
const recebeCurso = document.getElementById("parent");
const cursos = ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'REACT', 'MYSQL', 'REACTNATIVE'];
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado');
const removeSelecionado = document.getElementById('btnSelecionado');
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes");
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois");
const campoNome = document.getElementById("campoNome");
const erro = document.getElementById("erro");



let retornaSelecionado = () => {
    let todosCursos = [...document.querySelectorAll('.importante')];
    let resultadoSelecionado = todosCursos.filter((valor) => {
        return todosCursos[0];
    });

    return resultadoSelecionado[0];
}

let retiraSelecionado = () => {
    let retiraSel = [...document.querySelectorAll('.importante')];
    retiraSel.map((el) => {
        el.classList.remove('importante');
    });
}


let indice = 0;

let criaNovoCurso = (curso) => {
    let novosCurso = document.createElement('div');
    novosCurso.setAttribute('class', 'curso c1');
    novosCurso.setAttribute('id', ('div' + indice));
    novosCurso.innerHTML = curso;

    novosCurso.addEventListener('click', (evt) => {
        retiraSelecionado();
        evt.target.classList.toggle('importante');
    });

    indice++;
    return novosCurso;

}


cursos.map((el) => {
    let novoCurso = criaNovoCurso(el);
    recebeCurso.appendChild(novoCurso);

});

btnCursoSelecionado.addEventListener('click', (valor) => {
    try {
        let resultadoSelecionado = retornaSelecionado();

        alert("Você selecionou " + resultadoSelecionado.textContent);
    } catch (error) {
        erro.innerHTML = "SELECIONE UM CURSO!";
    }


});

removeSelecionado.addEventListener('click', () => {
    try {
        let remover = retornaSelecionado();
        remover.remove();

    } catch (error) {
        erro.innerHTML = "SELECIONE UM CURSO!";
    }
});

btnAdicionarAntes.addEventListener('click', (evt) => {
    if (campoNome.value == "") {
        erro.innerHTML = "INSIRA UM NOME PARA O CURSO!";
    } else {
        let curso = criaNovoCurso(campoNome.value);
        let filtro = retornaSelecionado();
        recebeCurso.insertBefore(curso, filtro);
    }



});


btnAdicionarDepois.addEventListener('click', (evt) => {
    if (campoNome.value == "") {
        erro.innerHTML = "INSIRA UM NOME PARA O CURSO!";
    } else {
        let curso = criaNovoCurso(campoNome.value);
        let filtro = retornaSelecionado();
        recebeCurso.insertBefore(curso, filtro.nextSibling);
    }
});