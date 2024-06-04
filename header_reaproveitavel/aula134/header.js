const body = document.body;
const head = document.head;
const css = '<link rel="stylesheet" href="header.css">';




const estilo =
    `
<style>
* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
}

.topo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 200px;
    background-color: #eee;
}

#logo {
    width: 15%;

}
#logo img {
    width: 100%;
    height: 200px;
}
#login {
    width: 20%;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}
#login img {
    width: 70px;
    height: 70px;
}
</style>
`
head.innerHTML += estilo;



head.innerHTML += css;
const header = document.createElement("div");
header.setAttribute("class", "topo");
header.setAttribute("id", "topo");
const logo =
    `
<div id="logo">
    <img src="../../img/aluno.png" title="picsum" alt="picsum">
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
    <img src="../../img/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" title="picsum" alt="picsum">
</div>
`;

header.innerHTML += (logo);
header.innerHTML += (login);

body.prepend(header);