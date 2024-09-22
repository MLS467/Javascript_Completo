<?php

namespace sistema;

require_once __DIR__ . "/Db.php";

use sistema\Db;
use PDO;

class Contatos
{
    private $nomeTabela;
    private $nome;
    private $celular;
    private $email;
    private $dataNascimento;


    public function __construct(array $dados = null)
    {
        $this->nomeTabela = 'contato'  ?? null;
        $this->nome = $dados['nome'] ?? null;
        $this->celular = $dados['celular']  ?? null;
        $this->email = $dados['email']  ?? null;
        $this->dataNascimento = $dados['dataNascimento']  ?? null;
    }

    public function inserirContato(): bool
    {
        $dados = array(
            $this->getNome(),
            $this->getCelular(),
            $this->getEmail(),
            $this->getDataNascimento()
        );

        $sql = "INSERT INTO $this->nomeTabela VALUES (null,?,?,?,?)";

        if (Db::preparar($sql)->execute($dados))
            return true;

        return false;
    }


    public function selecionarContatos($id = null)
    {
        $where = $id != null ? "WHERE id = $id" : "";
        $sql = "SELECT * FROM $this->nomeTabela $where ORDER BY nome";
        $query = Db::preparar($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function pesquisarRegistro($pesquisa)
    {
        $sql = "SELECT * FROM $this->nomeTabela WHERE UPPER(nome) LIKE UPPER('%$pesquisa%') ORDER BY nome";
        $query = Db::preparar($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getCelular(): string
    {
        return $this->celular;
    }

    public function setCelular(string $celular): void
    {
        $this->celular = $celular;
    }
    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getDataNascimento(): string
    {
        return $this->dataNascimento;
    }

    public function setDataNascimento($dataNascimento): void
    {
        $this->dataNascimento = $dataNascimento;
    }
}