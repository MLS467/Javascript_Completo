class Veiculo {
    constructor(nome, rodas, velocidade) {
        this.nome = nome;
        this.rodas = rodas;
        this.velocidade = velocidade;
    }

    getNome = function () {
        return this.nome;
    }

    getRodas = function () {
        return this.rodas;
    }

    getVelocidade = function () {
        return this.velocidade;
    }

    setNome = function (nome) {
        return this.nome = nome;
    }

    setRodas = function (rodas) {
        return this.rodas = rodas;
    }

    setVelocidade = function (velocidade) {
        return this.velocidade = velocidade;
    }


    freiar = function () {
        return this.velocidade = 0;
    }

    acelerar = function () {

        return this.velocidade += 5;
    }

}


class bike extends Veiculo {
    constructor(nome, rodas, velocidade, capacidade) {
        super(nome, rodas, velocidade);
        this.capacidade = capacidade;
    }
    info = function () {
        this.rodas = (this.rodas == 2 ? "BIKE" : "TRICICULO");
        console.log(`Nome: ${this.nome} N.Rodas ${this.rodas} Velocidade: ${this.velocidade}  Capacidade: ${this.capacidade}`)
    }

    setCapacidade = function (cap) {
        this.capacidade = cap;
    }

    getCapacidade = function () {
        return this.capacidade;
    }
}

let carro = new Veiculo('fusca', 4, 90);
let bike1 = new bike('magrela', 2, 50, 2);
bike1.setRodas(2);
bike1.setCapacidade(3);


while (carro.acelerar() < 200)
    console.log((carro.getVelocidade() > 150 ? "Explodiu" : carro.getVelocidade()));