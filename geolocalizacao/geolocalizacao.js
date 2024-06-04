let lat = document.getElementById('lat')



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pegavalor);
}

function pegavalor(dados) {
    console.log(dados)

    const lati = dados.coords.latitude;
    console.log(lati)
}




