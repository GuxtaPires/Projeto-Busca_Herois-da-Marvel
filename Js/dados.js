 let dados = [
    {
        titulo: "Homem aranha",
        descricao: "O Homem-Aranha, alter ego de Peter Parker, é um dos super-heróis mais populares e icônicos do universo Marvel. Criado por Stan Lee e Steve Ditko, Peter é um adolescente comum que, após ser picado por uma aranha radioativa, ganha habilidades sobre-humanas. A jornada de Peter o leva a equilibrar sua vida pessoal com as responsabilidades de ser um herói, aprendendo valiosas lições sobre poder, responsabilidade e o significado da palavra 'com grande poder, vem grande responsabilidade.'",
        link: "https://pt.wikipedia.org/wiki/Homem-Aranha",
     },

     {
        titulo: "Capitão América",
        descricao: "O Capitão América é um super-soldado criado durante a Segunda Guerra Mundial. Com força, agilidade e um escudo inquebrável, Steve Rogers, o homem por trás da máscara, é o símbolo da liberdade e da justiça. Seus valores e espírito de equipe o tornaram um dos líderes mais respeitados dos Vingadores.",
        link: "https://pt.wikipedia.org/wiki/Capitão_América",
    },
    {
        titulo: "Homem de Ferro",
        descricao: "Tony Stark, o gênio bilionário, playboy e filantropo, criou a armadura de Iron Man para proteger o mundo. Com tecnologia avançada e inteligência superior, Iron Man é um dos maiores inventores do Universo Marvel e um dos pilares dos Vingadores.",
        link: "nhttps://pt.wikipedia.org/wiki/Homem_de_Ferro",
    },
    {
        titulo: "Thor",
        descricao: "Thor, o Deus do Trovão, é um príncipe asgardiano com poderes divinos. Com seu martelo Mjolnir, ele protege os nove reinos e é um dos membros fundadores dos Vingadores. A jornada de Thor o leva a equilibrar suas responsabilidades como príncipe e como herói.",
        link: "https://pt.wikipedia.org/wiki/Thor",
    },

    {
        titulo: "Venom",
        descricao: "Simbionte alienígena que se funde a um hospedeiro, concedendo-lhe força, agilidade e a capacidade de moldar seu corpo. Venom é um anti-herói complexo, com uma relação ambivalente com seu hospedeiro.",
        link: "https://pt.wikipedia.org/wiki/Venom_(Marvel_Comics)"
    },
    {
        titulo: "Doutor Estranho",
        descricao: "Mestre das artes místicas, o Doutor Estranho protege a Terra de ameaças dimensionais. Seus poderes incluem manipulação da realidade e viagens interdimensionais.",
        link: "https://pt.wikipedia.org/wiki/Doutor_Estranho"
    },
    {
        titulo: "Shuri",
        descricao: "Princesa de Wakanda e irmã de T'Challa, Shuri é uma gênio tecnológica que cria equipamentos avançados para o Pantera Negra e para si mesma.",
        link: "https://pt.wikipedia.org/wiki/Shuri_(Marvel_Comics)"
    },
    {
        titulo: "Miles Morales",
        descricao: "Um adolescente afro-latino que foi picado por uma aranha geneticamente modificada, Miles Morales se tornou o novo Homem-Aranha do universo Ultimate.",
        link: "https://pt.wikipedia.org/wiki/Miles_Morales"
    },
    {
        titulo: "Motoqueiro fantasma",
        descricao: "Um espírito de vingança que se liga a um hospedeiro humano, concedendo-lhe poderes sobrenaturais como a capacidade de gerar fogo infernal e a 'Chain', uma corrente mística.",
        link: "https://pt.wikipedia.org/wiki/Ghost_Rider"
    },
    {
        titulo: "Jessica Jones",
        descricao: "Uma ex-super-heroína com força sobre-humana e a capacidade de voar, Jessica Jones luta contra seus traumas e trabalha como detetive particular.",
        link: "https://pt.wikipedia.org/wiki/Jessica_Jones"
    },
    {
        titulo: "Luke Cage",
        descricao: "Com uma pele impenetrável e força sobre-humana, Luke Cage é um herói de aluguel que luta pela justiça em Nova York.",
        link: "https://pt.wikipedia.org/wiki/Luke_Cage"
    },
    {
        titulo: "Punho de Ferro",
        descricao: "Danny Rand, o Punho de Ferro, é um mestre em artes marciais que pode canalizar a energia de um dragão místico através de seus punhos.",
        link: "https://pt.wikipedia.org/wiki/Punho_de_Ferro"
    },
    {
        titulo: "Elektra",
        descricao: "Uma assassina mortal treinada por ninjas, Elektra é uma ex-amante de Matt Murdock e possui habilidades incríveis em combate.",
        link: "https://pt.wikipedia.org/wiki/Elektra_Natchios"
    },
    {
        titulo: "Magnéto",
        descricao: "Um mutante com a capacidade de controlar metais, Magneto é um líder carismático que luta pelos direitos dos mutantes, embora seus métodos sejam muitas vezes questionáveis.",
        link: "https://pt.wikipedia.org/wiki/Magneto_(Marvel_Comics)"
    },
    {
        titulo: "Mística",
        descricao: "Uma mutante capaz de alterar sua forma e aparência, Mística é uma aliada e inimiga dos X-Men, dependendo de suas circunstâncias.",
        link: "https://pt.wikipedia.org/wiki/M%C3%ADstica_(Marvel_Comics)"
    },
    {
        titulo: "Gambit",
        descricao: "Um ladrão charmoso com a capacidade de carregar objetos com energia cinética, Gambit é um membro dos X-Men.",
        link: "https://pt.wikipedia.org/wiki/Gambit"
    },
    {
        titulo: "Tempestade",
        descricao: "Uma mutante com o poder de controlar o clima, Tempestade é uma líder carismática e uma das membros mais antigas dos X-Men.",
        link: "https://pt.wikipedia.org/wiki/Tempestade_(X-Men)"
    },
    {
        titulo: "Coisa",
        descricao: "Ben Grimm, o Coisa, é um membro do Quarteto Fantástico com uma pele rochosa e força sobre-humana.",
        link: "https://pt.wikipedia.org/wiki/Coisa_(Marvel_Comics)"
    },
    {
        titulo: "Namor",
        descricao: "O Príncipe Submarino, Namor, é um híbrido humano-atlântida com força sobre-humana e a capacidade de respirar debaixo d'água.",
        link: "https://pt.wikipedia.org/wiki/Namor"
    },

    {
        titulo: "Visão",
        descricao: "Um androide criado por Ultron, o Visão possui densidade variável, capacidade de voar e projetar feixes de energia. Ele se tornou um membro importante dos Vingadores.",
        link: "https://pt.wikipedia.org/wiki/Vis%C3%A3o_(Marvel_Comics)"
    },

    {
        titulo: "Feiticeira Escarlate",
        descricao: "Wanda Maximoff possui poderes de manipulação da realidade e energia mágica, tornando-se uma das mais poderosas mutantes da Marvel.",
        link: "https://pt.wikipedia.org/wiki/Feiticeira_Escarlate"
      },
      {
        titulo: "Mercúrio",
        descricao: "Irmão gêmeo de Wanda Maximoff, Mercúrio possui a capacidade de se mover em velocidades supersônicas.",
        link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(Marvel_Comics)"
      },
      {
        titulo: "Hulk",
        descricao: "Bruce Banner, ao ser exposto a radiação gama, se transforma em um monstro verde de força inigualável.",
        link: "https://pt.wikipedia.org/wiki/Hulk"
      },
      {
        titulo: "Wolverine",
        descricao: "Um mutante com um fator de cura acelerado, garras de adamantium e sentidos aguçados.",
        link: "https://pt.wikipedia.org/wiki/Wolverine"
      },
      {
        titulo: "Demolidor",
        descricao: "Matt Murdock, cego desde a infância, possui sentidos aguçados e habilidades em artes marciais, combatendo o crime em Hell's Kitchen.",
        link: "https://pt.wikipedia.org/wiki/Demolidor"
      },
    {
      titulo: "Pantera Negra",
      descricao: "Rei de Wakanda, com habilidades físicas aprimoradas, tecnologia avançada e um traje vibranium.",
      link: "https://pt.wikipedia.org/wiki/Pantera_Negra"
    },
    {
      titulo: "Gavião Arqueiro",
      descricao: "Mestre arqueiro com grande precisão, agilidade e diversos tipos de flechas especializadas.",
      link: "https://pt.wikipedia.org/wiki/Gavião_Arqueiro"
    },
    {
      titulo: "Viúva Negra",
      descricao: "Agente altamente treinada em espionagem e combate corpo a corpo, com habilidades atléticas excepcionais.",
      link: "https://pt.wikipedia.org/wiki/Viúva_Negra"
    },
    {
        titulo: "Raio Negro",
        descricao: "Líder dos Inumanos, com a capacidade de gerar sons concussivos.",
        link: "https://pt.wikipedia.org/wiki/Raio_Negro"
    },
    {
        titulo: "Medusa",
        descricao: "Com cabelo prénsil e a capacidade de se comunicar com outros Inumanos.",
        link: "https://pt.wikipedia.org/wiki/Medusa"
    },
    {
        titulo: "Cristal",
        descricao: "Com a capacidade de controlar a matéria em nível molecular.",
        link: "https://pt.wikipedia.org/wiki/Cristal_(Inumana)"
    },    
    {
        titulo: "Homem-Formiga",
        descricao: "Com a capacidade de mudar de tamanho e controlar insetos.",
        link: "https://pt.wikipedia.org/wiki/Homem-Formiga"
    },
    {
        titulo: "Vespa",
        descricao: "Com a capacidade de voar e diminuir de tamanho.",
        link: "https://pt.wikipedia.org/wiki/Vespa"
    },
    {
        titulo: "Star-Lord",
        descricao: "Líder dos Guardiões da Galáxia, um aventureiro com habilidades de combate e um blaster.",
        link: "https://pt.wikipedia.org/wiki/Star-Lord"
    },
    {
        titulo: "Gamora",
        descricao: "Assassina intergaláctica com habilidades de combate excepcionais.",
        link: "https://pt.wikipedia.org/wiki/Gamora"
    },
    {
        titulo: "Rocket Raccoon",
        descricao: "Guaxinim geneticamente modificado com inteligência elevada e habilidades de combate.",
        link: "https://pt.wikipedia.org/wiki/Rocket_Raccoon"
    },
    {
        titulo: "Groot",
        descricao: "Arboreal humanoide com a capacidade de se regenerar e manipular madeira.",
        link: "https://pt.wikipedia.org/wiki/Groot"
    },
    {
        titulo: "Sr. Fantástico",
        descricao: "Líder do Quarteto Fantástico, com a capacidade de esticar seu corpo.",
        link: "https://pt.wikipedia.org/wiki/Sr._Fantástico"
    },
    {
        titulo: "Mulher Invisível",
        descricao: "Membro do Quarteto Fantástico, com a capacidade de se tornar invisível e criar campos de força.",
        link: "https://pt.wikipedia.org/wiki/Mulher_Invisível"
    },
    {
        titulo: "Tocha Humana",
        descricao: "Membro do Quarteto Fantástico, com a capacidade de gerar fogo e voar.",
        link: "https://pt.wikipedia.org/wiki/Tocha_Humana"
    },
    {
        titulo: "Coisa",
        descricao: "Membro do Quarteto Fantástico, com força sobre-humana e pele rochosa.",
        link: "https://pt.wikipedia.org/wiki/Coisa_(Marvel_Comics)"
    },
    {
        titulo: "Ciclope",
        descricao: "Líder dos X-Men, com a capacidade de disparar raios ópticos de seus olhos.",
        link: "https://pt.wikipedia.org/wiki/Ciclope"
    },
    {
        titulo: "Jean Grey",
        descricao: "Telepata e telecineta poderosa, com a capacidade de manipular a energia psíquica.",
        link: "https://pt.wikipedia.org/wiki/Jean_Grey"
    },
    {
        titulo: "Fera",
        descricao: "Cientista mutante com habilidades físicas aprimoradas e a capacidade de se transformar em uma besta azul.",
        link: "https://pt.wikipedia.org/wiki/Fera"
    },
    {
        titulo: "Noturno",
        descricao: "Mutante com asas, garras e a capacidade de teletransportar-se.",
        link: "https://pt.wikipedia.org/wiki/Noturno"
    }
 ];