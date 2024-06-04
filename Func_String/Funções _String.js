let nome = new String("Maisson Leal a");
let sobrenome = new String("Silva");


//charArt --> pega o valor do indice e retorna o a letra
//charCodeArt --> pega o valor do indice e retorna o numero na tabela ASCII
// concat --> concatena Strings 
//indexOf --> retorna a posiçao da letra na string
//indexLastOf --> retorna a posição da ultima letra na String
/*localeCompare ---> compara dois valores de objetos do tipo string
 se retornar 1 => que a string comparada é menor
 se retornar -1 => que a string comparada é maior
 se retornar 0 => as string são iguais
*/

// replace("M","K") --> troca o valor de M por K tambem troca setenças
// search("Leal") --> retorna a posição do inicio da palavra
// slice --> Faz o corte passando a posição inicial e final
// split("")--> faz o recorde onde for especificado 
// substring() --> faz o mesmo que o slice 
// substr(0,7) --> pega a partir da primeira posição até q qtd de casas
// toUpperCase() --> tudo maiusculo
// toLocaleUpperCase()--> mesma coisa 
// toLowerCase() --> tudo minusculo
// toLocaleLowerCase() --> mesma coisa
// valueOf() --> usado para imprimir o valor dentro de um obj em string
// toString() --> converte qualquer valor em string 

// NOVIDADES ECMA SCRIPT 6

// startsWith("Ma") --> faz uma comparação com letra ou setença se for igual da true se mudar 1 letra é false
// endWith('l a') --> compara com a ultima letra ou sentença retorna true se mudar algo é false
// includes('sso') --> testa se tem letra ou setença na string retorna true se tiver e false caso não
// repeat(5) ---> repete a string quantas vezes o especificado
// String.fromCharCode(77, 97, 105, 115, 115, 111, 110) --> transforma da tab ascii para o valor em caracter
// `${nome}` --> template string

console.log(nome.localeCompare(6));

console.log()