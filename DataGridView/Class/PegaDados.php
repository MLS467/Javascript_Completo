<?php

namespace sistema;

require_once("Db.php");



class Dados
{

    public function pegaDados()
    {
        $sql = "SELECT * FROM produtos";
        $res = Db::preparar($sql);
        $res->execute();
        return $res->fetchAll();
    }


    public function excluirDadoPeloId(int $id): bool
    {
        $sql = "DELETE FROM produtos WHERE _id = $id";
        if (Db::preparar($sql)->execute())
            return true;
        return false;
    }
}