import readlineSync from 'readline-sync';
import helloUnknownName from './cli.js';

const playerName = helloUnknownName();

const ifWrongAnswer1 = (playerAnswer, correctAnswerToTheQuestion) => {
  if (playerAnswer !== correctAnswerToTheQuestion.toString()) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion}'.\nLet's try again, ${playerName}!`);
    return 'Defeat';
  }
  return 'Win';
};

const ifWrongAnswer2 = (playerAnswer, correctAnswerToTheQuestion) => {
  if (playerAnswer !== correctAnswerToTheQuestion()) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion()}'.\nLet's try again, ${playerName}!`);
    return 'Defeat';
  }
  return 'Win';
};

const randomNum = (modif) => Math.floor(Math.random() * modif);
const randomNumAndAntiZero = (modif, anti) => Math.floor(Math.random() * modif + anti);

const needSignsForQuestion = (mathOperation) => {
  switch (mathOperation) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return 'Что-то не так';
  }
};

const correctAnswerForCalculate = (mathOperation, randomNumberOne, randomNumberTwo) => {
  switch (mathOperation) {
    case 0:
      return randomNumberOne + randomNumberTwo;
    case 1:
      return randomNumberOne - randomNumberTwo;
    case 2:
      return randomNumberOne * randomNumberTwo;
    default:
      return 'Что-то не так';
  }
};

const searchGCDCorrectAnswer = (theSmallerOfTwoNumbers, randomNumberOne, randomNumberTwo) => {
  for (let i = theSmallerOfTwoNumbers; i >= 1; i -= 1) {
    if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
      return i;
    }
  }
  return 1;
};


const threeRoundsGame = (gameModule) => {
  let resultForGame;
  for (let i = 0; i < 3; i += 1) {
    resultForGame = gameModule();
    if (resultForGame === 'Defeat') {
      return 'Lose to the Game';
    }
  }
  console.log(`Congratulations, ${playerName}!`);
  return 'Win to the Game';
};


const calcThisHuman = () => {
  console.log('What is the result of the expression?');
  const randomNumberFromZeroToFifty = 51;
  const numberOfPossibleMathOperations = 3;
  const randomNumberOne = randomNum(randomNumberFromZeroToFifty);
  const randomNumberTwo = randomNum(randomNumberFromZeroToFifty);
  const mathOperation = randomNum(numberOfPossibleMathOperations);

  const signForQuestion = needSignsForQuestion(mathOperation);

  const correctAnswerToTheQuestion = correctAnswerForCalculate(
    mathOperation,
    randomNumberOne,
    randomNumberTwo,
  );

  console.log(`Question: ${randomNumberOne} ${signForQuestion} ${randomNumberTwo}`);
  
  const playerAnswer = readlineSync.question('Your answer: ');
  const resultForGame = ifWrongAnswer1(playerAnswer, correctAnswerToTheQuestion, playerName);
  console.log('Correct!');
  return resultForGame;
};

const thisNumberEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumberFromZeroToTen = 11;
  const randomNumber = randomNum(randomNumberFromZeroToTen);
  const correctAnswerToTheQuestion = () => (randomNumber % 2 === 0 ? 'yes' : 'no');

  console.log(`Question: ${randomNumber}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const resultForGame = ifWrongAnswer2(playerAnswer, correctAnswerToTheQuestion, playerName);
  console.log('Correct!');
  return resultForGame;
};


const brotherhoodNOD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randomNumberFromZeroToFifty = 49;
  const antiZero = 1;
  const randomNumberOne = randomNumAndAntiZero(randomNumberFromZeroToFifty, antiZero);
  const randomNumberTwo = randomNumAndAntiZero(randomNumberFromZeroToFifty, antiZero);

  const theSmallerOfTwoNumbers = Math.min(randomNumberOne, randomNumberTwo);

  const correctAnswerToTheQuestion = searchGCDCorrectAnswer(
    theSmallerOfTwoNumbers,
    randomNumberOne,
    randomNumberTwo,
  );
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  
  const playerAnswer = readlineSync.question('Your answer: ');
  const resultForGame = ifWrongAnswer1(
    playerAnswer,
    correctAnswerToTheQuestion.toString(),
    playerName,
  );
  if (resultForGame === 'Win') {
    console.log('Correct!');
  }
  return resultForGame;
};


const thisNumberPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumberFromTwoToFifty = 48;
  const antiZeroAndOne = 2;
  const randomNumber = randomNumAndAntiZero(randomNumberFromTwoToFifty, antiZeroAndOne);

  const correctAnswerToTheQuestion = () => {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  console.log(`Question: ${randomNumber}`);
 
  const playerAnswer = readlineSync.question('Your answer: ');
  const resultForGame = ifWrongAnswer2(playerAnswer, correctAnswerToTheQuestion, playerName);
  console.log('Correct!');
  return resultForGame;
};


const arithmeticProgression = () => {
  console.log('What number is missing in the progression?');
  const randomNumberFromZeroToFifty = 51;
  const randomNumberFromOneToTen = 9;
  const randomNumberFromZeroToTen = 10;
  const antiZero = 1;
  const randomStartsNum = randomNum(randomNumberFromZeroToFifty);
  const randomStepUp = randomNumAndAntiZero(randomNumberFromOneToTen, antiZero);
  const randomPositionHide = randomNum(randomNumberFromZeroToTen);
  const questionArr = [];

 

  for (let i = randomStartsNum; questionArr.length < 10; i += randomStepUp) {
    questionArr.push(i);
  }
  const correctAnswerToTheQuestion = questionArr[randomPositionHide];
  questionArr[randomPositionHide] = '..';

  const questionArrToStringForTZ = questionArr.join(' ');

  

  console.log(`Question: ${questionArrToStringForTZ}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const resultForGame = ifWrongAnswer1(playerAnswer, correctAnswerToTheQuestion, playerName);
  console.log('Correct!');
  return resultForGame;
};

export {
  threeRoundsGame,
  calcThisHuman,
  thisNumberEven,
  brotherhoodNOD,
  thisNumberPrime,
  arithmeticProgression,
  playerName,
};