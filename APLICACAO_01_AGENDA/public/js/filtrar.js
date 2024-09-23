const retornaContatos = async () => {
    const endpoint = `/APLICACAO_01_AGENDA/Nucleo/retornaContato.php?id=`;
    (await fetch(endpoint, { method: 'GET' })).json()
        .then(res => {

            res.contatos.forEach(element => {
                document.getElementById('contatosRes').innerHTML +=
                    `
                        <tr>
                    <td>${element.id}</td>
                    <td>${element.nome}</td>
                    <td>${element.celular}</td>
                    <td>${element.data_nascimento}</td> 
                    <td>${element.email}</td> 
                        </tr>
                    `;
            });

            const searchInput = document.getElementById('searchInput');
            const tableRows = document.querySelectorAll('#contatosRes tr');

            searchInput.addEventListener('keyup', function () {
                const searchValue = searchInput.value.toLowerCase();

                tableRows.forEach(function (row) {
                    const nome = row.querySelector('td:nth-child(2)').textContent.toLowerCase();

                    if (nome.includes(searchValue)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
}

document.addEventListener('DOMContentLoaded', retornaContatos);
