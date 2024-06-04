

const ctx = document.getElementById('dados');
const nome_valores = ['Quantidade', 'Velocidade', 'Precisão']
const num_valores = [];
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nome_valores,
        datasets: [{
            label: '# of Votes',
            data: num_valores,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const req = fetch("https://ca635693-7f36-4301-bc43-3f2f66412c27-00-3qnwhri6mzili.worf.replit.dev/")
    .then(res => res.text())
    .then(res => {
        res = JSON.parse(res);
        num_valores.push(res.quantidade)
        num_valores.push(res.velocidade)
        num_valores.push(res.precisao)

        grafico.update();

    });