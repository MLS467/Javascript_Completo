<?php

use sistema\Helpers;

require_once __DIR__ . "/../model/Contato.php";
require_once __DIR__ . "/../Helpers/Helpers.php";

// Helpers::mostrArray((new sistema\Contatos())->selecionarContatos(1));

$idCont = $_GET['id'];

!empty($idCont) ?  retornaValor($idCont) : retornaValor();

function retornaValor($id = null)
{
    $res = (new sistema\Contatos())->selecionarContatos($id);
    echo json_encode(["contatos" => $res]);
}