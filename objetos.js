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
