let id = document.getElementById("id");
let textoRes = document.getElementById("texto");

// OBJ COM SET PARA DEFINIR AS PROPRIEDADES
const dados = {
    // METODO PARA PEGAR O RESULTADO DO FECH
    set Texto(val) {
        this.id = val.id;
        this.texto = val.advice;
        id.innerHTML = `ID: ${this.id}`;
        textoRes.innerHTML = `ID: ${this.texto}`;
    },

    // METODO PARA RETORNAR OS VALORES DO OBJ
    get Texto() {
        return [this.texto, this.id];
    }
}

// FUNÇÃO QUE PEGA O RETORNO DO FECH E JOGA NO OBJ NO MET SET TEXTO
const buscarDados = () => {
    const endpoint = 'https://api.adviceslip.com/advice';
    fetch(endpoint)
        .then(res => res.json())
        .then((res) => {
            dados.Texto = res.slip;
        })
}

// INTERVALO PARA CHAMAR A FUNÇÃO
let intervalo = setInterval(() => {
    buscarDados();
}, 3000)
