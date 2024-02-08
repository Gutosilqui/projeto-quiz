const perguntas = [
  {
    pergunta: "Quem é o principal antagonista em Dark Souls?",
    respostas: [
      "Gwyn, o Senhor da Cinder",
      "Sif, o Grande Lobo Cinzento",
      "Artorias, o Abissal",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da cidade onde se passa a maior parte de Dark Souls?",
    respostas: [
      "Anor Londo",
      "Firelink Shrine",
      "Lordran",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do chefe mais difícil de Dark Souls?",
    respostas: [
      "Capra Demon",
      "Ornstein e Smough",
      "Taurus Demon",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o item usado para fortalecer armas em Dark Souls?",
    respostas: [
      "Titanite",
      "Estus Flask",
      "Soul of a Hero",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do sistema de morte e renascimento em Dark Souls?",
    respostas: [
      "Ressurreição",
      "Reviver",
      "Bonfire Ascetic",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da moeda em Dark Souls?",
    respostas: [
      "Almas",
      "Dinheiro",
      "Cristais",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da facção que busca prolongar a Era do Fogo em Dark Souls?",
    respostas: [
      "Cavaleiros de Carim",
      "Filhos de Gwyn",
      "Servos das Trevas",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da arma que é a marca registrada do personagem Solaire de Astora?",
    respostas: [
      "Sunlight Straight Sword",
      "Lightning Spear",
      "Greatsword of Artorias",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o criador do universo de Dark Souls?",
    respostas: [
      "Hidetaka Miyazaki",
      "Shigeru Miyamoto",
      "Hideo Kojima",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do primeiro chefe de Dark Souls?",
    respostas: [
      "Asylum Demon",
      "Taurus Demon",
      "Bell Gargoyles",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a raça do personagem Sif, o Grande Lobo Cinzento?",
    respostas: [
      "Lobo",
      "Gigante",
      "Cachorro",
    ],
    correta: 0
  },
  {
    pergunta: "O que acontece quando o jogador acende a Fogueira Final em Dark Souls?",
    respostas: [
      "Fim do jogo",
      "Início do modo New Game Plus",
      "Transformação do personagem em Hollow",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da área onde se encontram os Dragões Drakes em Dark Souls?",
    respostas: [
      "Valley of Drakes",
      "The Abyss",
      "Lost Izalith",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do último chefe de Dark Souls?",
    respostas: [
      "Gwyn, o Senhor da Cinder",
      "Gwyndolin, o Príncipe Traído",
      "Artorias, o Abissal",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do primeiro NPC que o jogador encontra em Dark Souls?",
    respostas: [
      "Petrus de Thorolund",
      "Oscar, o Cavaleiro",
      "Solaire de Astora",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do grande rei dragão que é um dos principais antagonistas de Dark Souls?",
    respostas: [
      "Kalameet",
      "Seath",
      "Midir",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da habilidade que permite ao jogador se mover rapidamente por curtas distâncias em Dark Souls?",
    respostas: [
      "Teleporte",
      "Dash",
      "Roll",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da cidade amaldiçoada em Dark Souls?",
    respostas: [
      "Blighttown",
      "Undead Burg",
      "New Londo Ruins",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o chefe que guarda a Campainha da Despertar em Dark Souls?",
    respostas: [
      "Bell Gargoyles",
      "Ceaseless Discharge",
      "Gaping Dragon",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do local onde o jogador inicia sua jornada em Dark Souls?",
    respostas: [
      "Firelink Shrine",
      "Undead Asylum",
      "The Catacombs",
    ],
    correta: 1
  }
];

// Seu código para o quiz aqui


  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    
    
    quiz.appendChild(quizItem)
  }
