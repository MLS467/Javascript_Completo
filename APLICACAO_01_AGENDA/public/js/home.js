const retornaContatos = async () => {
    const endpoint = `/APLICACAO_01_AGENDA/Nucleo/retornaContato.php?id=`;
    (await fetch(endpoint, { method: 'GET' })).json()
        .then(res => res.contatos.forEach(element => {
            console.log(element)
            document.getElementById('contatosRes').innerHTML +=
                `
                <tr>
            <td>${element.id}</td>
            <td>${element.nome}</td>
            <td>${element.celular}</td>
            <td>${element.data_nascimento}</td> 
            <td>${element.email}</td> 
            <br>
                 </tr>
            `;
        }));
}

retornaContatos();