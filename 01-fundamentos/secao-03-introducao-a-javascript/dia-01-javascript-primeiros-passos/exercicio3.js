// Utilize if/else para escrever um código que retorne o maior de três números. 
// Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let numA = 52;
let numB = 1;
let numC = 100;

if (numA > numB && numA > numC){
    console.log("O maior número é: " + numA)
}
else if (numB > numA && numB > numC ){
    console.log("O maior número é: " + numB)
} else{
    console.log("O maior número é: " + numC)
}