
/**
 *   RegEx
 *
 * EXPRESSÕES REGULARES SÃO USADAS DENTRO DE FUNÇÕES DE PROCURA EM STRING E TAMBEM PARA VALIDAÇÕES DE FORMULÁRIO
 * PRA ACEITAR SÓ CARACTERES ALFANUMERICOS OU NUMEROS TBM
 *
 *  O uso atual de expressões regulares inclui procura e substituição de texto em editores de texto e linguagens de programação, validação de formatos de texto (validação de protocolos ou formatos digitais), realce de sintaxe e filtragem de informação.
 *
 *
 *  SINTAXE
 *
 *  deve por o caracter entre barras -->   /"A"/
 *  pode se usar flags --> <g> para pesquisar em toda a sentença
 *  pode se usar tambem --> <i> que serve para deixar insensityve para aceitar a letra maiuscula e minuscula
 *
 * EX: /"com"/gi    obs: gi ou ig não importa a ordem
 *
 * se caso usar um caracter reservado do regex deve se usar \ antes ex: /\.com/gi
 *
 *
 * USAR EM FUNÇOES DE PROCURA EM STRINGS
 *
 * EX:
 *
 * nome.search(/'pinho'/i)
 * nome.match('/O/ig');
 * nome.replace(/o/i, "teste")
 *
 * criar padrões em RegEx
 *
 * deve se colocar os colchetes
 *
 * /[]/ --> colchetes quer dizer que aceita qualquer caracter que esteja dentro
 *
 * /["oh"]/gi --> vai procurar os o e tbm os h
 *
 * /["a-z | 0-9"]/ --> faz a pesquisa entre a e z o traço quer dizer até
 *
 * METACARACTER
 *
 * /\d/gi --> \d serve para pegar somento valores numericos
 * /\s/gi -->ESPAÇOS
 * /\b/gi -->Alfanumericos tem q especificar o valor
 * /\w/gi --> só pega letras, numero e underline ótimo para email
 * QUANTIFICADORES
 *
 * /o+|s+/ig --> pega valores que tem o consecutivos ex ooooo e s tbm ex sssss como 1 valor só
 *
*/

//  /10*/gi --> pega tudo que tem 1 e quantos zeros tiver após {0,n}
//  /a(s){0,}/ --> vai pegar tudo igual o de cima

// /a(s)+/gi pega como no minino 1 as e no maximo infinitos ssss

// /\n./ --> o ponto siginifica qualquer coisa, ta procurando uma quebra de linha seguido de qualquer coisa

//  /10?/gi --> pega tudo que tem 1 e 10 --> ? pode existir 0,1
//  /a(s)?/gi --> ele acha o a que não tenhum s (0) , e pega o as que tem 1 s (1) {0,1}
//  //a(s){0,1}/gi --> mesmo que o ?

// /^Maisson$/gi --> o ^ indica inicio e $ o final a palavra deve ser igual pra dar math
// /^Maisson/ --> testa so o inicio sem testar o fim
// /son$/ --> testa só o fim