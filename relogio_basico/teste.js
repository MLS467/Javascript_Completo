let h1 = document.getElementById("h1");
i = 0;

setInterval(() => {
    const agora = new Date();
    h1.innerHTML = agora.toLocaleTimeString();

}, 500);
