
let head = document.head;
let body = document.body;

let estilo = '<link rel="stylesheet" href="header.css">';
head.innerHTML += estilo;

let div = document.createElement("div");
div.setAttribute("id", "topo");
div.setAttribute("class", "topo");

let logo = '<div class="logo" id="logo">' +
    '<img src="https://picsum.photos/id/237/200/300">' +
    '</div>';

div.innerHTML += logo;
body.prepend(div);
