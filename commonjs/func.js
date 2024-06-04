let sum = ($valor) => {
    let num = 0;
    $valor.forEach((element, i) => {
        num += element;
    });
    return num;
}

module.exports = { sum };
