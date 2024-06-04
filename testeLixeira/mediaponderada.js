function Celular(marca, modelo, pc) {
    this.marca = marca;
    this.modelo = modelo;
    this.pc = pc;
    this.ligar = () => {
        setTimeout(() => {
            console.log(this.marca)
            console.log(this.modelo)
            console.log(this.pc)
        }, 1000)
    }
}

let j4 = new Celular("Samsung", "J4", "1GB");

j4.ligar();





