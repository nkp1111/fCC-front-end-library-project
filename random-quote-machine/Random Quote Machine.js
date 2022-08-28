const body = document.querySelector('body');
const text = document.getElementById('text');
const author = document.getElementById('author');
const buttons = document.querySelectorAll('.btn');
const newQuote = document.querySelector('#new-quote');
const colorList = ['rgb(50, 168, 104)', '#3294a8', '#a8323c', '#a85b32', '#b0912a', '#8ab02a', '#2a88b0'];

const quotes = [
['The belief in a supernatural source of evil is not necessary. Men alone are quite capable of every wickedness ', 'Joseph Conrad'],
['The farther backward you can look, the farther forward you can see ', 'Winston Churchill'],
['Try again, fail again. Fail better ', 'Samuel Beckett'],
['Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world ', 'Albert Einstein'],
['Birds sing after a storm. Why shouldn\'t people feel as free to delight in whatever sunlight remains to them', 'Rose Kennedy'],
['Nothing is so common as the wish to be remarkable ', 'William Shakespeare'],
['The question that sometimes drives me hazy: Am I, or the others crazy ', 'Albert Einstein'],
['What we do for ourselves dies with us. What we do for others and the world remains and is immortal ', 'Albert Pine'],
['In the end, it\'s not the years in your life that count. It\'s the life in your years ', 'Abraham Lincoln'],
['It has been said that time heals all wounds. I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue, and the pain lessens, but it is never gone ', 'Rose Kennedy'],
['Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth ', 'Oscar Wilde'],
['Although the world is full of suffering, it is also full of overcoming it ', 'Helen Keller'],
['It\'s not so important who starts the game, but who finishes it ', 'Erich Fromm'],
];

let colorIndex = 0;


function styleAdd() {

  if (colorIndex >= colorList.length) {
    colorIndex = 0;
  } 

  body.style.backgroundColor = colorList[colorIndex];
  author.style.color = colorList[colorIndex];
  text.style.color = colorList[colorIndex];

  buttons.forEach(button =>  
  {
    button.style.backgroundColor = colorList[colorIndex];
  })

  colorIndex += 1;

  let quoteIndex = Math.floor(Math.random() * quotes.length);
  text.innerHTML = '<i class="fa-solid fa-quote-left"></i>' + quotes[quoteIndex][0];
  author.innerText = quotes[quoteIndex][1];
}


window.addEventListener('load', styleAdd)

newQuote.addEventListener('click', styleAdd)

