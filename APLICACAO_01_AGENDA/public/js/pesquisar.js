const pesquisado = document.getElementById('resultadoPesquisados');

document.getElementById('btnPesquisar').addEventListener('click', evt => {
    const radio = document.querySelectorAll('input[type="radio"]:checked');
    const pesquisar = document.getElementById('pesquisar');
    !pesquisar ? alert('Insira a pesquisa') : fazerPesquisa(pesquisar.value, radio[0].value);
})

const fazerPesquisa = async (pes, tipo) => {
    pesquisado.innerHTML = '';

    const dados = JSON.stringify({ 'pesquisa': pes, 'tipo': tipo });
    const endpoint = '/APLICACAO_01_AGENDA/Nucleo/retornaPesquisa.php'
    const result = (await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: dados
    })).json()

    result.then(resultado => {

        console.log(resultado.res)
        resultado.res.forEach(element => {
            pesquisado.innerHTML += `
                <tr>
            <td>${element.id}</td>
            <td>${element.nome}</td>
            <td>${element.celular}</td>
            <td>${element.data_nascimento}</td> 
            <td>${element.email}</td> 
            </tr>
            `})
    }
    );


}