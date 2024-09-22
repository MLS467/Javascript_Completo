<?php

namespace sistema;

use PDO;

class Db
{
    private static $pdo;

    public static function conectar()
    {
        if (isset(self::$pdo) and !empty($pdo)) {
            return self::$pdo;
        } else {

            try {
                self::$pdo = new PDO(
                    "mysql:host=localhost;dbname=agendajs",
                    'root',
                    '',
                    array(
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_CASE => PDO::CASE_NATURAL
                    )
                );
                echo "conectado com sucesso!";
                return self::$pdo;
            } catch (\Throwable $e) {
                echo $e->getMessage();
            }
        }
    }

    public static function preparar(string $sql)
    {
        return self::conectar()->prepare($sql);
    }


    protected function __construct() {}
}

Db::conectar();