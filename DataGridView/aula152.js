
const config =
{
    endpoint: "Controller/pegarDadosController.php",
    idDestino: "dgvDados"
}
// aqui
const deletar = ($id) => {
    let res = fetch(`Controller/excluir.php?id=${$id}`, {
        method: 'GET'
    })
        .then(res => { if (res.status == 200) return true; });
    return res;
}


let dgv = (config) => {
    let dados = document.getElementById(config.idDestino);
    fetch(config.endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            res.itens.forEach(element => {
                let divLinha = document.createElement("div")
                divLinha.setAttribute("id", "divLinha")
                divLinha.setAttribute("class", "divLinha")

                const c1 = document.createElement("div");
                c1.setAttribute("class", "c1");
                c1.innerHTML = `${element._id}`;
                divLinha.appendChild(c1);

                const c2 = document.createElement("div");
                c2.setAttribute("class", "c2");
                c2.innerHTML = `${element.nome_produto}`;
                divLinha.appendChild(c2);

                const c3 = document.createElement("div");
                c3.setAttribute("class", "c3");
                c3.innerHTML = `${element.marca_produto}`;
                divLinha.appendChild(c3);

                const c4 = document.createElement("div");
                c4.setAttribute("class", "c4");
                c4.innerHTML = `${element.modelo_produto}`;
                divLinha.appendChild(c4);

                const c5 = document.createElement("div");

                const imgEdit = document.createElement("img")
                imgEdit.setAttribute("src", "img/edit.svg");
                imgEdit.setAttribute("class", "icon");

                const imgDelete = document.createElement("img")
                imgDelete.addEventListener('click', (evt) => {
                    console.log(deletar(element._id));
                    evt.target.parentNode.parentNode.remove();
                });
                imgDelete.setAttribute("class", "icon");
                imgDelete.setAttribute("src", "img/delete.svg");

                const imgVer = document.createElement("img")
                imgVer.setAttribute("class", "icon");
                imgVer.setAttribute("src", "img/visibility.svg");

                c5.appendChild(imgDelete);
                c5.appendChild(imgEdit);
                c5.appendChild(imgVer);

                divLinha.appendChild(c5);

                dados.appendChild(divLinha);

            });
        })

}

dgv(config);

