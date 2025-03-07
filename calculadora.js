// Definição das variáveis iniciais
let wins = 100; // Número de vitórias
let looses = 0; // Número de derrotas

// Cálculo do saldo de vitórias
let saldoVitorias = wins - looses; 

// Função que retorna o rank do jogador com base no saldo de vitórias
function winsOrLoses(W, L) {  
    let saldo = W - L; // Calcula o saldo dentro da função

    // Retorna diretamente o rank correspondente ao saldo de vitórias
    if (saldo >= 101) return "Imortal";
    if (saldo >= 90) return "Lendário";
    if (saldo >= 80) return "Diamante";
    if (saldo >= 50) return "Ouro";
    if (saldo >= 20) return "Prata";
    if (saldo >= 10) return "Bronze";
    
    return "Ferro"; // Se o saldo for menor que 10, retorna "Ferro"
}

// Armazena o resultado da função
let rankFinal = winsOrLoses(wins, looses);

// Exibe a saída no console
console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${rankFinal}`);
