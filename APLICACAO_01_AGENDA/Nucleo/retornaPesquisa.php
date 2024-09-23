<?php

use sistema\Helpers;

require_once __DIR__ . "/../model/Contato.php";
require_once __DIR__ . "/../Helpers/Helpers.php";

// Obter o corpo da requisição JSON
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true); // Decodificar o JSON para um array associativo

// Exibir o array para depuração

if (isset($input) and !empty($input)) {
    $pesquisa = $input['pesquisa'];
    $tipo = $input['tipo'];
    echo json_encode(['res' => (new sistema\Contatos())->pesquisarRegistro($pesquisa, $tipo)]);
} else {
    echo json_encode(['erro' => 'não foi possível pesquisar']);
}