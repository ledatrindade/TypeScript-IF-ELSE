import readline from 'readline-sync';

    let numero: number [] = [];
    let maior = 0;
    let menor = 0;

    for(let i=0; i<4; i++){

    let entrada: number = Number (readline.question("Digite 4 numeros separados por espaco: "));
    
    numero.push(entrada);

        if (i === 0) {
        // Se for a primeira iteração, o menor número é inicializado com o primeiro número inserido
        menor = entrada;
         } else {
        // Atualiza o menor número se a entrada atual for menor
             if (entrada < menor) {
            menor = entrada;
            }
        }

        if (entrada>maior) {
            maior = entrada;
        } 


    }

    
    
   
   
    console.log("O menor valor é:", menor);
    console.log("O maior valor é:", maior);


