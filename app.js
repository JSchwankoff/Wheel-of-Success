const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
startBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const phrases = [
  'I love going outside when it is raining',
  'Dogs are my favorite kind of animal',
  'Jupiter is the largest planet in the galaxy',
  'Spiders spin webs to catch their prey',
  'Javascript makes websites more interactive'
]

function getRandomPhraseAsArray(array) {
  let phrase = array[Math.floor(Math.random() * array.length)];
  let phraseCharacters = [...phrase];
  return phraseCharacters;
}

function addPhraseToDisplay(array) {
  const ul = phrase.querySelector('ul');
  for (let i = 0; i < array.length; i++) {
    const characterLI = document.createElement('li');
    characterLI.textContent = array[i];
    if (characterLI.textContent === /[a-zA-Z]/) {
      characterLI.className = 'letter';
    }
    ul.appendChild(characterLI);
  }
}
// Put getRandomPhraseAsArray into add addPhraseToDisplay??
