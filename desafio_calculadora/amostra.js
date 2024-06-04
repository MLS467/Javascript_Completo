const soma = document.getElementById('soma');
const mult = document.getElementById('mult');
const divis = document.getElementById('divis');
const subt = document.getElementById('subt');
const imprime = document.getElementById('imprime');
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const res = document.getElementById('res');



/**
 * Calculadora é um array com funções matemáticas básicas
 * 
 */
const Calculadora = [
    // 0 faz a soma de n valores
    (...valor) => {
        let soma = 0;
        valor.map((el) => {
            soma += el;
        });
        return soma;
    },
    // 1 faz a multiplicação de n numeros
    (...valor) => {

        let mult = 1;
        valor.map((el) => {
            mult *= el;
        });

        return mult;
    },

    // 2 faz a subtração de n numeros
    (...valor) => {
        let sub;
        sub = valor.reduce((anterior, atual) => {
            return anterior - (atual);
        });
        return sub;
    },

    // 3 faz a divisão de n numeros 
    (...valor) => {
        let divisao;
        if (valor.indexOf(0) != -1) {
            return ("DIVISÃO POR ZERO!");
        } else {
            divisao = valor.reduce((anterior, atual) => {
                return anterior / (atual);
            });
            return divisao;
        }
    },
    // 4 faz a impressão de todos os valores
    (...valor) => {
        return res.value = valor.join("-");
    }



];


soma.addEventListener('click', (evt) => {
    let resultado = Calculadora[0](parseFloat(valor1.value), parseFloat(valor2.value));
    res.value = resultado;
    setTimeout(() => {
        valor1.value = "";
        valor2.value = "";
        res.value = "";
    }, 10000)
});

subt.addEventListener('click', (evt) => {
    let resultado = Calculadora[2](parseFloat(valor1.value), parseFloat(valor2.value));
    res.value = resultado;
    setTimeout(() => {
        valor1.value = "";
        valor2.value = "";
        res.value = "";
    }, 10000)
});

mult.addEventListener('click', (evt) => {
    let resultado = Calculadora[1](parseFloat(valor1.value), parseFloat(valor2.value));
    res.value = resultado;
    setTimeout(() => {
        valor1.value = "";
        valor2.value = "";
        res.value = "";
    }, 10000)
});

divis.addEventListener('click', (evt) => {
    let resultado = Calculadora[3](parseFloat(valor1.value), parseFloat(valor2.value));
    res.value = resultado;
    setTimeout(() => {
        valor1.value = "";
        valor2.value = "";
        res.value = "";
    }, 10000)
});

imprime.addEventListener('click', (evt) => {
    let resultado = Calculadora[4](parseFloat(valor1.value), parseFloat(valor2.value));
    res.value = resultado;
    setTimeout(() => {
        valor1.value = "";
        valor2.value = "";
        res.value = "";
    }, 10000)
});





