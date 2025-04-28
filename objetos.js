//Objetos//
let times=[
   { 
      [{"nome":"Acel chopinzinho futsal","goleiro":"Leo paraisoto","alaDireita":"matheus mendes","alaEsquerda":"Lucas da silva","pivo":"Breno felipe","fixo":"cubano","tecnico":"daniel junior","vitorias":0,"derrotas":0},
      {"nome":"Bahia","goleiro":"eduardo","alaDireita":"jaime","alaEsquerda":"romarinho","pivo":"bill","fixo":"jota","tecnico":"vinicios","vitorias":0,"derrotas":0},
      {"nome":"Palmeiras","goleiro":"Heitor","alaDireita":"joazinho bezerra","alaEsquerda":"philipe","pivo":"kayke","fixo":"luisinho","tecnico":"Pietro","vitorias":0,"derrotas":0},{"nome":"Santos","goleiro":"vitor","alaDireita":"gustavo","alaEsquerda":"samuel","pivo":"luan","fixo":"Marquinhos","tecnico":"Márica","vitorias":0,"derrotas":97},
      {"nome":"Furacão","goleiro":"carlinhos","alaDireita":"pedro","alaEsquerda":"esquerda","pivo":"leozinho","fixo":"Gabriel gomes","tecnico":"Manu vieira","vitorias":0,"derrotas":0}]











































      
      nome: "Marreco Futsal",
      goleiro: "Rafa Freitas",
      aladireita: "Meleca",
      alaesquerda: "Murilo",
      pivô: "Pebinha",
      fixo: "Nogueira",
      técnico: "Marcelo Batista",
      vitorias: 4,
      derrotas:0,
    },
  {
    nome: "Acel chopinzinho futsal",
    goleiro: "Leo Parisotto",
    aladireita: "Matheus Mendes",
    alaesquerda: "Lucas da silva",
    pivô: "Breno Felipe",
    fixo: "Cubano",
    técnico: "Daniel Júnior",
    vitorias: 1,
    derrotas:4,
  } ,
  {
    nome: "Itambé/Minas",
    goleiro: "Anderson",
    aladireita: "Baron",
    alaesquerda: "Pintinho",
    pivô: "Felipão",
    fixo: "Gui Lopes",
    técnico: "Diogo Barros",
    vitorias: 21,
    derrotas:10,
  },
  {
    nome: "Santo André",
    goleiro: "Caio",
    aladireita: "Xaropinho",
    alaesquerda: "Mendes",
    pivô: "Dudu",
    fixo: "Felipe",
    técnico: "Cidão",
    vitorias: 20,
    derrotas:19,
  },
  {
    nome: "Cascavel",
    goleiro: "Jackson",
    aladireita: "Elano",
    alaesquerda: "Zequinha",
    pivô: "Vini",
    fixo: "Carlão",
    técnico: "Deividy",
    vitorias: 23,
    derrotas:10,
  }
];

function vertimes () {
     times. forEach((time) => {
            console.log (time.nome + "-" + time.goleiro + "(goleiro)", time.aladireita + "(ala)" , time.alaesquerda + "(ala)" + time.pivô + "(pivô)" + time.fixo + "(fixo)" + time.técnico + time.vitorias + time.derrotas)
     } );
}
    vertimes();
