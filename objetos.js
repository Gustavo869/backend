//Objetos//
let times=[
   {      
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
    nome: "Bahia",
    goleiro: "eduardo",
    aladireita: "jaime",
    alaesquerda: "romarinho",
    pivô: "bill",
    fixo: "jota",
    técnico: "vinicius",
    vitorias: 0,
    derrotas:0,
  },
  {
    nome: "Palameira",
    goleiro: "heitor",
    aladireita: "joaozinhobezzera",
    alaesquerda: "philipe",
    pivô: "kayke",
    fixo: "luisinho",
    técnico: "pietro",
    vitorias: 0,
    derrotas:0,
  },
  {
    nome: "Santos",
    goleiro: "vitor",
    aladireita: "gustavo",
    alaesquerda: "samuel",
    pivô: "luan",
    fixo: "Marquinhos",
    técnico: "Márica",
    vitorias: 0,
    derrotas:0,
  }
];

function vertimes () {
     times. forEach((time) => {
            console.log (time.nome + "-" + time.goleiro + "(goleiro)", time.aladireita + "(ala)" , time.alaesquerda + "(ala)" + time.pivô + "(pivô)" + time.fixo + "(fixo)" + time.técnico + time.vitorias + time.derrotas)
     } );
}
    vertimes();
