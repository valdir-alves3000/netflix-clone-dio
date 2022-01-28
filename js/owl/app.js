const data = [
  {
    title: "The Umbrella Academy",
    description:
      "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.",
  },
  {
    title: "Smallville: As Aventuras do Superboy",
    description:
      "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.",
  },
  {
    title: "Star Wars: A Ascensão Skywalker",
    description:
      "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.",
  },
  {
    title: "Heróis Pokémon: Latios & Latias",
    description:
      "Alto Mare é uma ilha muito diferente. O estilo, a arquitetura, a localidade e até mesmo pelo que é famosa: uma cidade construída sobre a superfície da água. A beleza e os locais de Alto Mare deram-lhe o título de “A capital das águas”. Mais há algo por trás desta bela cidade... Uma lenda, relacionada aos Pokémon Irmãos Infinito, Latias e Latios. Eles protegem um tesouro, a Lágrima do Coração. O que acontecerá se ela cair em mãos erradas? É isto que Ash, Misty, Brock e Pikachu deveram impedir a qualquer custo. Mas eles não estarão sozinhos.",
  },

  {
    title: "O Hobbit: A Batalha dos Cinco Exércitos",
    description:
      "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.",
  },
  {
    title: "Capitão América: Guerra Civil",
    description:
      "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
  },
];

const owlcarrosel = document.querySelector(".owl-carousel");
const filmePrincipal = document.querySelector(".filme-principal");
const title = document.querySelector(".container .title");
const description = document.querySelector(".container .description");

for (let i = 0; i < data.length; i++) {
  const img = `/img/mini${i + 1}.jpg`;
  const click = `updateMainMovie(data[${i}].title,data[${i}].description, 'url(${img})')`;
  owlcarrosel.innerHTML += `
  <div class="item">
  <img onclick="${click}" class="box-filme" src="${img}" alt="" />
  </div>`;
}

function updateMainMovie(filme, desc, img) {
  title.innerHTML = filme;
  description.innerHTML = desc;
  filmePrincipal.style.setProperty("--img", img);
}
