const form = document.getElementById('formNovo');

document.getElementById('btnForm').addEventListener('click', (evt) => {
    evt.preventDefault();

    !testaValor() ? alert('Preenche os campos') : form.submit();
})

const testaValor = () => {
    const inputs = [...document.querySelectorAll('input')].filter(e => e.getAttribute('value') != 'Enviar');

    const valor = inputs.filter(e => e.value === '');
    if (valor.length > 0)
        return false;
    return true;
}