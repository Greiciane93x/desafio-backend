// Questão 1: Dados um array de números inteiros, retorne 
// os índices dos dois números de forma que eles se somem 
// a um alvo específico 

let arrayNumeros  = [10, 5, 12, 3, 11, 4, 12, 3, 14, 1]; 
let primeiraSoma = 0; 
let segundaSoma = 0; 
let terceiraSoma = 0; 
let quartaSoma = 0;
let quintaSoma = 0; 

for(let i = 0; i < arrayNumeros.length; i++){
    primeiraSoma = arrayNumeros[0]+arrayNumeros[1]; 
    segundaSoma = arrayNumeros[2]+arrayNumeros[3]; 
    terceiraSoma = arrayNumeros[4]+arrayNumeros[5]; 
    quartaSoma = arrayNumeros[6]+arrayNumeros[7]; 
    quintaSoma = arrayNumeros[8]+arrayNumeros[9]; 
}
console.log(primeiraSoma + ", "+ segundaSoma + ", " + terceiraSoma + ", " + quartaSoma + ", " + quintaSoma) ; 

console.log("-----------------------------------------------"); 

// Questão 2: Dados sequências de caracteres, determine se cada sequência de
// de brakets é balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, 
// retorne NÃO. 

let arrayBrackets1 = ['(', '{', '[', ']','}', ')']; 
let arrayHipotese = ['(', '{', '[', ']','}', ')']; 
let arrayHipotese2 = ['(', '{', '[', ']','}']; 
let arrayTest = []; 
let arrayTest2 = []; 

for(let i = 0; i < arrayBrackets1.length; i++){
        if(arrayBrackets1[i] === arrayHipotese[i]){
            arrayTest.push(arrayBrackets1[i]); 
        }
}

for(let i = 0; i < arrayBrackets1.length; i++){
        if(arrayBrackets1[i] === arrayHipotese2[i]){
            arrayTest2.push(arrayBrackets1[i]); 
        }
}

console.log(arrayTest.length === 6 ? 'Sequência balanceada >>>> '+ arrayTest + '': 'Sequência não balanceada >>>> ' + arrayTest) ; 
console.log(arrayTest2.length === 6 ? 'Sequência balanceada >>>> '+ arrayTest2 + '': 'Sequência não balanceada >>>> ' + arrayTest2) ; 

console.log("-----------------------------------------------"); 

//Questão 3: Desenvolva um algoritmo para encontrar o lucro máximo 

function lucroMaximo(a, b, c){
   
    let potencia = Math.pow(b, 2);  
    const DELTA =  potencia-4*(a)*(c);  
    var ValorLucroMaximo = -DELTA/(4*a)
    console.log(ValorLucroMaximo)
     
}
lucroMaximo(-1, 30, 0);


