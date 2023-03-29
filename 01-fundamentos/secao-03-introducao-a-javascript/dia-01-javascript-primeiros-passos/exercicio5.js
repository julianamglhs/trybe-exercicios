// Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, 
// você deve retornar uma mensagem de erro.

let angA = 30;
let angB = 60;
let angC = 80;

soma = angA + angB + angC

if ( soma === 180){
    console.log(true)

}else if(soma != 180 && soma < 0){
    console.log(false);
} else{
    console.log("angulo inválido")
}