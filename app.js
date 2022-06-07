const guessNumber = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const reBtn = document.querySelector('.reload');
const randomValue = document.querySelector('.Random-number');
const result = document.querySelector('.result');
const life = document.querySelector('.life');
const end = document.querySelector('.end');
const first = document.querySelector('#first');
const last = document.querySelector('#last');

reBtn.style.display = 'none';
let continueGame;
let randomNumber = Math.floor(Math.random() * 100 + 1);

let live = 5;

function Guess() {
  console.log(randomNumber);
  if (guessNumber.value === '') {
    alert('Please enter a value');
  } else {
    if (guessNumber.value > 100 || guessNumber.value < 0) {
      alert('Please enter a number between 1 and 100');
    } else {
      live--;
      if (live > 0) {
        if (guessNumber.value > randomNumber) {
          result.innerHTML = 'Your guess is high.';
          life.innerHTML = `You have ${live} tries left.`;
          last.innerHTML = guessNumber.value;
        } else if (guessNumber.value < randomNumber) {
          result.innerHTML = 'Your guess is low.';
          life.innerHTML = `You have ${live} tries left.`;
          first.innerHTML = guessNumber.value;
        }
      } else if (guessNumber.value == randomNumber) {
        end.innerHTML = 'YOU WON!';
        result.innerHTML = '';
        life.innerHTML = `You won with ${live} lives left !`;
        randomValue.innerHTML = randomNumber + ' was the number';
        guessSubmit.disabled = true;
        reBtn.style.display = 'block';
      } else if (live == 0) {
        end.innerHTML = 'YOU LOST!';
        randomValue.innerHTML = randomNumber + ' was the number';
        life.innerHTML = `You have ${live} tries left.`;
        guessSubmit.disabled = true;
        reBtn.style.display = 'block';
      }
    }
  }
}
guessSubmit.addEventListener('click', Guess);
guessSubmit.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    Guess;
  }
});
reBtn.onclick = function () {
  location.reload(true);
};
