/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica

let nome = "Gustavo Barbosa Zela"; 
let numerochamada = 5; 

// 2) Criação de uma lista

const jogos = [ "voleibol", "vôlei de praia", "futsal"];

// 3) Utilização de um laço while
console.log("####### Exércicio 3 #######")


console.log("Meus jogos favorito são"  + jogos )
let i = 0;
while (i < 3) {
    console.log(jogos[i]);
    i++;
}



// 4) Criação de um objeto

let filme = {
    nome: "Gustavo Barbosa Zela",
    filme: "Homem aranha Longe De Casa",
    lancamento: 2019,
    nota: 4.2,
};



// 5) Utilização de if-else


if (filme.nota<= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
} else if (filme.nota> 4.0 && notaFilme <= 7.0) {
    console.log("O filme é considerado razoável.");
} else if (filme.nota > 7.0) {
    console.log("O filme é muito bom!");
}




// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]

