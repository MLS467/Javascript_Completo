// OBJ LITERAL
const config = {
    titulo: "ficou zika",
    texto: "bolada",
    cor: "red"
}

//INSTANCIEI A CLASSE CONSEGUI PEGAR PORQUE O ARQUIVO DA CLASSE VEM ANTES 
const cx = new Caixa(config);

// CHAMADA DO MÉTODO PELO BOTÃO BTN 
document.getElementById("btn").addEventListener("click", () => {
    cx.mostrar();
})
