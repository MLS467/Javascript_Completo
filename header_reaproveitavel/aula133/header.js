const body = document.body;
const head = document.head;
const css = '<link rel="stylesheet" href="header.css">';


head.innerHTML += css;
const header = document.createElement("div");
header.setAttribute("class", "topo");
header.setAttribute("id", "topo");

const logo =
    `
<div id="logo">
    <img src="img/aluno.png" title="picsum" alt="picsum">
</div>
`;
let nome = "Maisson Leal";
let matricula = '24051995/2024';

const login =
    `
<div id="login">
    <div>
        <p>Matrícula: ${nome}</p>
        <p>Nome:  ${matricula}</p>
    </div>   
    <img src="img/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" title="picsum" alt="picsum">
</div>
`;


header.innerHTML += (logo);
header.innerHTML += (login);
body.prepend(header);