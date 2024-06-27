//Trabalhando com strings

var nome="Rogério"; // Escopo global
let profissao="docente"; // Escopo local
const endereco="Rua Francisco Aro"; // Constante (valor q n pode ser modificado)    

// for(let i=0;i<=10;i++){
//     // variavel (let) tem escopo local
//     console.log(i)
// }

// alert(nome.toLowerCase()) //passa as letras para minúscula
// alert(nome.toLocaleUpperCase()) //passa p letras maiusculas
// alert(nome.length()) //conta as letras da string(quantidade de caracteres)
// alert(profissao.charAt(2)) // retorna a posição(index) do caracter
// alert(endereco.startsWith("Ru")) //verifica as primeiras letras(onde começa)
// alert(endereco.endsWith("Aro"))//verifica as ultimas letras(onde acaba)
// alert(endereco.includes("Francisco", 2)) //verifica se esta palavra existe em "endereco"; no segundo parâmetro eu verifico se a palavra "Francisco" existe após o index(2)
// alert(endereco.indexOf("Aro",13)) //retorna a posição do index da palavra ou letra pesquisada ; no segundo parâmetro eu verifico se a palavra "Aro" existe após o index(15)