let num_objetos = document.getElementById('num_objetos');
const txt_qtde = document.getElementById('txt_qtde');
const btn_add = document.getElementById('btn_add');
const btn_remover = document.getElementById('btn_remover');
const palco = document.getElementById('palco');

let larguraDiv = palco.offsetWidth;
let alturaDiv = palco.offsetHeight;
let bolas = [];
let numBolas = 0;


class Bola {
    constructor(bol, palco) {
        this.tamanhoBola = Math.floor((Math.random() * 15) + 10);
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.posX = Math.floor(Math.random() * (larguraDiv - this.tamanhoBola));
        this.posY = Math.floor(Math.random() * (alturaDiv - this.tamanhoBola));
        this.velX = Math.floor(Math.random() * 2) + 0.5;
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        this.dirX = (Math.random() * 10) > 5 ? 1 : -1;
        this.dirY = (Math.random() * 10) > 5 ? 1 : -1;
        this.palco = palco;
        this.arrayBolas = bol;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 1000000000);
        this.desenhar();
        setInterval(this.controle, 10);
        this.eu = document.getElementById(this.id);
        num_objetos.innerHTML = this.arrayBolas.length + 1;

    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this);
    }

    remover = () => {
        clearInterval(this.controle)
        bolas = bolas.filter((b) => {
            if (b.id != this.id) {
                return b
            }
        })
        this.eu.remove();
        num_objetos.innerHTML = bolas.length;
    }

    desenhar = () => {
        let div = document.createElement('div');
        div.setAttribute('class', 'bola');
        div.setAttribute('id', this.id);
        div.setAttribute('style', `left:${this.posX}px;top:${this.posY}px;width:${this.tamanhoBola}px;height:${this.tamanhoBola}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div);
    }

    controlarBorda = () => {
        if (this.posX + this.tamanhoBola >= larguraDiv) {
            this.dirX = -1;
        } else if (this.posX + this.tamanhoBola <= 0) {
            this.dirX = 1;
        }
        if (this.posY + this.tamanhoBola >= alturaDiv) {
            this.dirY = -1;
        } else if (this.posY + this.tamanhoBola <= 0) {
            this.dirY = 1;
        }
    }

    controle = () => {
        this.controlarBorda();
        this.posX += this.dirX * this.velX;
        this.posY += this.dirY * this.vely;
        this.eu.setAttribute("style", `left:${this.posX}px;top:${this.posY}px;width:${this.tamanhoBola}px;height:${this.tamanhoBola}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        if ((this.posX > larguraDiv) || (this.posY > alturaDiv)) {
            this.remover()
        }
    }
}


window.addEventListener('resize', () => {
    larguraDiv = palco.offsetWidth;
    alturaDiv = palco.offsetHeight;
});


btn_add.addEventListener('click', (evt) => {
    const size = txt_qtde.value;
    for (let index = 0; index < size; index++) {
        bolas.push(new Bola(bolas, palco));
    }

});

btn_remover.addEventListener('click', () => {
    bolas.map((el) => {
        el.remover();
    });
});