const ctx = document.getElementById('meuGrafico');

let paises = ['Brasil', 'Argentina', 'EUA', 'Alemanha', 'China', 'Japao'];
let valores = ['5', '2', '8', '9.5', '9.2', '10']
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: paises,
        datasets: [{
            label: '# of Votes',
            data: valores,
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

