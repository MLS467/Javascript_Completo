// METODO GET (PADRÃO)

const btn = document.getElementById('btn');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');

let pegaCep = () => {
    let cep = document.getElementById('cep');

    let viacep = `https://viacep.com.br/ws/${cep.value}/json/`;
    let res = fetch(viacep, { method: "GET" })
        .then(res => res.json())
        .then(dados => {
            rua.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
        })
}

cep.addEventListener('focusout', pegaCep);



