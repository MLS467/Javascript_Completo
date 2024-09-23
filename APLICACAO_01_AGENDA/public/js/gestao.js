import { excluir, editar } from "./gestao_excluir_editar.js";

const addEventos = () => {
    const btnExc = [...document.querySelectorAll('.delete')];
    const btnEdit = [...document.querySelectorAll('.edit')];

    btnEdit.forEach(e => e.addEventListener('click', evt => {
        const popup = document.getElementById('popup');
        const id = parseInt(evt.target.getAttribute('id'));
        popup.classList.toggle('ocultar');
        document.getElementById('atualizar').addEventListener('click', (evt) => {
            popup.classList.add('ocultar');
            const dados = {
                nome: document.getElementById('nome').value,
                celular: document.getElementById('telefone').value,
                data_nascimento: document.getElementById('data_nascimento').value,
                email: document.getElementById('email').value
            }
            editar(id, dados);

        });
        document.getElementById('cancelar').addEventListener('click', (evt) => popup.classList.add('ocultar'));
    }));

    btnExc.forEach(e => e.addEventListener('click', evt => {
        const id = parseInt(evt.target.getAttribute('id'));
        excluir(id);
    }));
}

const retornaContatos = async () => {
    const endpoint = `/APLICACAO_01_AGENDA/Nucleo/retornaContato.php?id=`;
    (await fetch(endpoint, { method: 'GET' })).json()
        .then(res => res.contatos.forEach(element => {
            document.getElementById('contatosRes').innerHTML +=
                `
                <tr>
            <td>${element.id}</td>
            <td>${element.nome}</td>
            <td>${element.celular}</td>
            <td>${element.data_nascimento}</td> 
            <td>${element.email}</td> 
            <td><img id="${element.id}" class="delete" src="../public/img/delete.png" alt="delete" width="25" title="deletar">
            <img id="${element.id}" class="edit" src="../public/img/edit.png" alt="edit" width="25"  title="editar"></td>
                 </tr>
            `;
            addEventos();

        }));
}

retornaContatos();





