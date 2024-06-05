// OBJ LITERAL
const config = {
    titulo: "INSTANCIEI A CLASSE ",
    texto: "PEGAR PORQUE",
    cor: "#007acc"
}

//INSTANCIEI A CLASSE CONSEGUI PEGAR PORQUE O ARQUIVO DA CLASSE VEM ANTES 
const cx = new Caixa(config);

// CHAMADA DO MÉTODO PELO BOTÃO BTN 
document.getElementById("btn").addEventListener("click", () => {
    cx.mostrar();
})


