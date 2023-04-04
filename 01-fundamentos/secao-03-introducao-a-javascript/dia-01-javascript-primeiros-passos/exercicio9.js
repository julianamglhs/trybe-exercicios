// Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, o código deve retornar false.

let numA = 5;
let numB = 1;
let numC = 7;

let indice = false;

if ( (numA % 2 !==0) || (numB % 2 !==0) || (numC % 2 !==0) ){
    indice = true;

}

console.log(indice);