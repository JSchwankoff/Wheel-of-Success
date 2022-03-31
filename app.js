const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
let tries = document.querySelectorAll('li[class=tries]');
let missed = 0;

const btnMain = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
btnMain.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const phrases = [
  'i love going outside when it is raining',
  'dogs are my favorite kind of animal',
  'jupiter is the largest planet in the galaxy',
  'spiders spin webs to catch their prey',
  'javascript makes websites more interactive'
]

function getRandomPhraseAsArray(array) {
  let phrase = array[Math.floor(Math.random() * array.length)];
  var phraseCharacters = [...phrase];
  return phraseCharacters;
}

let characters = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    const characterLI = document.createElement('li');
    characterLI.textContent = array[i];
    if (characterLI.textContent !== ' ') {
      characterLI.className = 'letter';
    }
    ul.appendChild(characterLI);
  }
}

addPhraseToDisplay(characters);

function checkLetter(button) {
  let letters = ul.querySelectorAll('li[class=letter]');
  let btnChosen = button.textContent;
  let correctLetter = null;
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i].textContent;
    if (btnChosen === letter) {
      letters[i].className += ' show';
      correctLetter = letter;
    }
  }
  return correctLetter;
}

qwerty.addEventListener('click', (e) => {
  let guess = e.target;
  guess.className = 'chosen';
  let letterFound = checkLetter(guess);
  if (letterFound === null) {
    missed += 1;
    tries[missed - 1].firstChild.src = 'images/lostHeart.png';
  }
  checkWin();
});

function checkWin() {
  const shown = ul.querySelectorAll('li[class=show]');
  const totalLetters = ul.querySelectorAll('li[class=letter]');
  const gameOver = document.querySelector('.title');
  if (shown.length === totalLetters.length) {
    overlay.className = 'win';
    gameOver.textContent = 'You Win!!';
    overlay.style.display = 'inherit';
  } else if (missed >= 5) {
    overlay.className = 'lose';
    gameOver.textContent = 'You Lose';
    overlay.style.display = 'inherit';
  }
  btnMain.textContent = 'Reset';
}
