<?php
require_once __DIR__ . "/../Class/PegaDados.php";

use sistema\Dados;

$id = $_GET['id'];
if (isset($id) and !empty($id)) {
    (new Dados())->excluirDadoPeloId($id);
} else {
    echo throw new Exception("Error Processing Request", 1);
}