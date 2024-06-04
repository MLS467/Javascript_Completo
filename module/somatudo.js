
let soma = ($valor) => {
    let num = 0;
    $valor.map((i) => {
        num += i;
    })
    return num;
}

export default soma;