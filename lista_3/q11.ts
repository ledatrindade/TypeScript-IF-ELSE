import readline from "readline-sync";

function maior(n1: number, n2: number, n3: number, n4: number ): string {

    let resultado = n1 * 0.30;

    if ( n2 > resultado ){

        return `O emprestino de ${n2} não poderá ser realizado`;
    } else {
        return `O emprestino de ${n2} poderá ser realizado`;
    }
}

let resul1;
let resul2;
let numeroTeste = 0;
for ( let  i = 0; i < 4; i++){
let numero1: number = Number(readline.question("Digite um numero: "));



if(numeroTeste < numero1){

    resul1 = numero1;
    numeroTeste = resul1;
}else {
    resul2 = numero1
    
}



console.log(maior(numero1, numero2));