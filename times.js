
let times=require("./dados.json");


function verTimes(){
    times.forEach((time) => {
       console.log(time.nome + "-" + 
                   time.goleiro + "(goleiro)," + 
                   time.alaDireito + "(Ala Direito)," + 
                   time.alaEsquerdo + "(Ala Esquerdo)," + 
                   time.fixo + "(Fixo),"+
                   time.tecnico + "(Técnicos),"+
                   time.vitorias + "(Vitorias),"+
                   time.derrotas + "(derrotas)")
 
    });

}

function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
    console.log("Arquivo criado");
}

function marcarJogos(timeA, timeB, data, horario, ginasio, cidade){
    let jogos = require("./jogos.json");
    jogo = {
        timeA: timeA,
        timeB: timeB,
        data: data,
        horario: horario,
        ginasio: ginasio,
        cidade: cidade,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs = require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}
marcarJogos("Marreco", "Acel chopinzinho futsal" , "25/07/2025", "17:00", "Complexo Esportivo Arrudão", "Francisco beltrão")
//criarArquivo();

verTimes();
marcarJogos();
