<?php

namespace sistema;

use PDO;
use PDOException;

class Db
{

    private static $pdo;


    public static function conectar()
    {
        if (isset(self::$pdo) and !empty(self::$pdo)) {
            return self::$pdo;
        } else {
            self::$pdo = new PDO("mysql:host=localhost;dbname=curso_javascript", "root", "");

            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

            return self::$pdo;
        }
    }

    public static function preparar($sql)
    {
        return self::conectar()->prepare($sql);
    }
}