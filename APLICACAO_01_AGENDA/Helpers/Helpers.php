<?php

namespace sistema;

class Helpers
{


    public static function mostrArray($args): void
    {
        echo "<pre>";
        print_r($args);
        echo "</pre>";
    }
}