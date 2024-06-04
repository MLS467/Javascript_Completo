
let arquivo = "./aula127.txt"
fetch(arquivo)
    .then(res => res.text())
    .then(res => {
        console.log(res)
    });