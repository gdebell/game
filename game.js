//////////////////Game One Code /////////////////////////


function pickRandomNumOneToTen() {
    var randomNum = Math.floor(Math.random() * 10);
    return randomNum;
}


function gameOne() {
  var answer = pickRandomNumOneToTen();
  console.log(answer);

  var value = prompt ('Enter a value between 0-10.');
  var guess = parseInt(value);

  if (guess === answer) {
    window.alert('Winner winner, chicken dinner!');
  } else {
    window.alert('You loose. Sad face.');
  }
}




//////////

function game() {
  var valueOne = prompt ('Enter a number between 1-5.');
  var guessOne = parseInt(valueOne);

  var valueTwo = prompt ('Enter a number between 1-5.');
  var guessTwo = parseInt(valueTwo);

  var answer = guessTwo * guessOne;
  var squared = answer * answer;

  window.alert('Your answer is ' + squared + '.')
};



////////////////////Game Two Code  ///////////////////////////////////////

function pickRandomNumOneToHun() {
    var randomNum = Math.floor(Math.random() * 100);
    return randomNum;
}


function gameTwo() {
  answerTwo = pickRandomNumOneToHun();
  console.log(answerTwo);
  playTwo(answerTwo);
}

var remainingGuesses = 3;

function playTwo(num) {
  var secretNumber = num;

  if (remainingGuesses === 0) {
    window.alert('Game over');
  } else {
    var value = prompt ('Enter a value between 0-100.  You have ' + remainingGuesses + ' guesses left.');
    var guess = parseInt(value);

    if ( guess === answerTwo) {
      window.alert('Winner winner, chicken dinner!');
    } else if ( guess > answerTwo ) {
      window.alert('Your guess is too big.');
      remainingGuesses = remainingGuesses-1;
      playTwo(secretNumber);
    } else {
      window.alert('Your guess is too small.');
      remainingGuesses = remainingGuesses-1;
      playTwo(secretNumber);
    }
  }
}
