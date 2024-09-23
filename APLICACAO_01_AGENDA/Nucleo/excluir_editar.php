<?php
require_once __DIR__ . "/../model/Contato.php";
require_once __DIR__ . "/../Helpers/Helpers.php";


$id = $_GET['id'];
$tipo = $_GET['tipo'];

if (!empty($id) && isset($id) && !empty($tipo) && isset($tipo)) {
    acoes($id, $tipo);
} else {
    echo json_encode(['ERRO' => 'Dados incorretos ou inválidos!']);
}


function acoes($id, $tipo)
{
    if ($tipo === '1') {
        if ((new sistema\Contatos())->excluirRegistroId($id))
            echo json_encode(['resultado' => 'excluido com sucesso!']);
    } else {
        $dados = array(
            'nome' => $_GET['nome'],
            'celular' => $_GET['celular'],
            'email' => $_GET['email'],
            'data_nascimento' => $_GET['data_nascimento']
        );

        if ((new sistema\Contatos())->editarRegistroId($id, $dados))
            echo json_encode(['resultado' => 'atualizado com sucesso!']);
    }
}