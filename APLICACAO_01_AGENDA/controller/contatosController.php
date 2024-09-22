<?php
require_once __DIR__ . "/../model/Contato.php";

$dados = [
    'nome' => $_POST['nome'],
    'celular' => $_POST['celular'],
    'email' => $_POST['email'],
    'dataNascimento' => $_POST['dataNascimento']
];

if ((new sistema\Contatos($dados))->inserirContato()) {
    echo "Contato inserido";
} else {
    echo "erro";
}