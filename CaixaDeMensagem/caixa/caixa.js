// FIZ A CLASSE CAIXA
class Caixa {
    titulo = null;
    texto = null;
    cor = null;
    destino = null;
    divmsg = null;
    status = null;

    // FIZ O CONSTRUTOR QUE VAI RECEBER UM OBJ LITERAL
    constructor(config) {
        this.titulo = config.titulo;
        this.texto = config.texto;
        this.cor = config.cor;
        this.destino = document.body;
        this.status = false;
    }
    mostrar = () => {
        let estilo = `display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);`;

        const estiloAreaCaixa =
            `display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        width:500px;
        height:200px;
        background:#ccc;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        `;

        const estiloTitulo =
            `display:flex;
            background:${this.cor};
            padding:10px;
            color:white;
        justify-content:flex-start;
        align-items:center;
        width:100%;
        height:100px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        `;

        const estiloBtn =
            `
        color:black;
        background:#ccc;
        border:#0091ffc9;
        border-radius:5px;
        width:20%;
        padding:5px;
        cursor:pointer;
        `


        const estiloCentro =
            `display:flex;
            padding:10px;
        justify-content:flex-start;
        align-items:center;
        width:100%;
        height:200px;
        `;

        const estiloFinal = `
            display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100px;
        background:${this.cor};
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        `
        this.divmsg = document.createElement('div');
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo);
        this.destino.prepend(this.divmsg);

        const areaCaixa = document.createElement('div');
        areaCaixa.setAttribute("style", estiloAreaCaixa);
        this.divmsg.appendChild(areaCaixa);

        const areaTitulo = document.createElement("div");
        areaTitulo.setAttribute("style", estiloTitulo);
        areaTitulo.innerHTML = this.titulo;
        areaCaixa.prepend(areaTitulo);

        const areaCentral = document.createElement("div");
        areaCentral.setAttribute("style", estiloCentro);
        areaCentral.innerHTML = this.texto;
        areaCaixa.appendChild(areaCentral);

        const areaFinal = document.createElement("div");
        areaFinal.setAttribute("style", estiloFinal);
        const btn = document.createElement("button");
        btn.setAttribute("id", "btnCaixa")
        btn.setAttribute("style", estiloBtn);
        btn.addEventListener("click", () => { this.ocultar() });
        btn.innerHTML = "OK";
        areaFinal.appendChild(btn);


        areaCaixa.appendChild(areaFinal);

        this.status = true;
        // mostrar a caixa de msg
    }

    ocultar = () => {
        if (this.status) {
            this.status = false;
            this.divmsg.remove();
        }
    }

}