<?php
require_once("../class/PegaDados.php");

use sistema\Dados;

$res = (new Dados())->pegaDados();




echo json_encode(['itens' => $res]);