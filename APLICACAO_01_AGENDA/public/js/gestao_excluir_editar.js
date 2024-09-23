async function excluir(id) {
    const endpoint = `/APLICACAO_01_AGENDA/Nucleo/excluir_editar.php?id=${id}&tipo=1`;
    (await fetch(endpoint, { method: "GET" })).json()
        .then(res => {
            if (res.resultado = "excluido com sucesso!") {
                document.location.reload();
            }
        });
}

async function editar(id, dados) {

    const endpoint = `/APLICACAO_01_AGENDA/Nucleo/excluir_editar.php?
    id=${id}&
    nome=${dados.nome}&
    celular=${dados.celular}&
    data_nascimento=${dados.data_nascimento}&
    email=${dados.email}&
    tipo=2`;

    console.log(endpoint);

    (await fetch(endpoint, { method: "GET" })).json()
        .then(res => {
            alert('Dados atualizados com sucesso!');
            document.location.reload();
            // if (res.resultado = "excluido com sucesso!") {
            //     document.location.reload();
            // }
        });

}


export { excluir, editar };