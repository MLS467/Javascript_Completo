const teste = document.querySelector("#h1");
const mapa = new Map();
let keys = 1;

let list = (chave, valor) => {
    mapa.set(chave, valor);
    keys++;
}

list(keys, "Maisson");
list(keys, "Luciane");
list(keys, "Manuelle");
list(keys, "TESTE");

mapa.delete(4);

if (mapa.has(1)) {
    mapa.forEach((el) => {
        teste.innerHTML += " " + el;
    });

    console.log(mapa.values());
} else {
    teste.innerHTML = "Bugado";
}




