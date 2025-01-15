//Questão número 1

let indice = 13; // Define o índice  
let soma = 0;    // Inicializa a soma em 0  
let k = 0;       // Inicializa k em 0  

while (k < indice) { // Enquanto k for menor que o índice  
    k = k + 1;      // Incrementa k em 1  
    soma = soma + k; // Adiciona k ao total da soma  
}  

console.log(soma); // Imprime o valor final da soma  


//Questão número 2
// Função para verificar se um número pertence à sequência de Fibonacci  
function pertenceAFibonacci(num) {  
    let fibonacci = [0, 1]; // Começa com os dois primeiros números da sequência  

    // Gera a sequência de Fibonacci enquanto o último número for menor que o número informado  
    while (fibonacci[fibonacci.length - 1] < num) {  
        const proximoValor = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];  
        fibonacci.push(proximoValor);  
    }  

    // Verifica se o número está na sequência  
    if (fibonacci.includes(num)) {  
        return `${num} pertence à sequência de Fibonacci.`;  
    } else {  
        return `${num} não pertence à sequência de Fibonacci.`;  
    }  
}  

// Número a ser verificado - pode ser alterado ou lido do usuário  
const numeroInformado = 21; // Exemplo de número a ser verificado  
console.log(pertenceAFibonacci(numeroInformado));  


//Questão número 3
const faturamentoDiario = [  
    200, 0, 0, 300, 400, 0, 500,  
    600, 700, 800, 0, 0, 1000,  
    0, 0, 200, 0, 300, 500,  
    600, 0, 0, 700, 800, 900, 1000  
];  

// Calcular o menor e maior faturamento  
const menorFaturamento = Math.min(...faturamentoDiario.filter(v => v > 0));  
const maiorFaturamento = Math.max(...faturamentoDiario);  

// Calcular a média mensal  
const diasComFaturamento = faturamentoDiario.filter(v => v > 0);  
const mediaFaturamento = diasComFaturamento.reduce((acc, curr) => acc + curr, 0) / diasComFaturamento.length;  

// Contar quantos dias tiveram faturamento acima da média  
const diasAcimaDaMedia = diasComFaturamento.filter(v => v > mediaFaturamento).length;  

// Resultados  
console.log("Menor faturamento:", menorFaturamento);  
console.log("Maior faturamento:", maiorFaturamento);  
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia); 


//Questão número 4
// Faturamento mensal por estado  
const faturamentoPorEstado = {  
    SP: 67836.43,  
    RJ: 36678.66,  
    MG: 29229.88,  
    ES: 27165.48,  
    Outros: 19849.53  
};  

// Cálculo do faturamento total  
const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);  

// Cálculo do percentual de representação de cada estado  
const percentualRepresentacao = {};  

for (const estado in faturamentoPorEstado) {  
    percentualRepresentacao[estado] = (faturamentoPorEstado[estado] / totalFaturamento * 100).toFixed(2) + '%';  
}  

// Exibição dos resultados  
console.log("Faturamento Percentual por Estado:");  
for (const estado in percentualRepresentacao) {  
    console.log(`${estado}: ${percentualRepresentacao[estado]}`);  
}  

// Exibir o total do faturamento  
console.log(`\nFaturamento total da distribuidora: R$${totalFaturamento.toFixed(2)}`);  

//Quetão número 5
// Função para inverter uma string  
function inverterString(str) {  
    let strInvertida = ""; // Inicializa uma string vazia para armazenar a string invertida  

    // Loop para percorrer a string original de trás para frente  
    for (let i = str.length - 1; i >= 0; i--) {  
        strInvertida += str[i]; // Adiciona cada caractere à nova string  
    }  

    return strInvertida; // Retorna a string invertida  
}  

// String a ser invertida (pode ser alterada conforme necessário)  
const stringOriginal = "JavaScript é incrível!";  
const stringInvertida = inverterString(stringOriginal);  

// Exibe o resultado  
console.log("String Original: " + stringOriginal);  
console.log("String Invertida: " + stringInvertida);  