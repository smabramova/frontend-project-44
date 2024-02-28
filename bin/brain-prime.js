#!/usr/bin/env node

import readlineSync from 'readline-sync'; 
import  greetUser from '../src/cli.js';
import threeRoundsGame from '../src/index.js'; 

const playerName = greetUser();

const thisNumberPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumberFromTwoToFifty = 48;
  const antiZeroAndOne = 2;
  const randomNumber = Math.floor(Math.random() * randomNumberFromTwoToFifty + antiZeroAndOne);
  let resultForGame;

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
  if (playerAnswer !== correctAnswerToTheQuestion()) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion()}'.\nLet's try again, ${playerName}!`);
    resultForGame = 'Defeat';
    return resultForGame;
  }
  resultForGame = 'Win';
  console.log('Correct!');
  return resultForGame;
};

threeRoundsGame(thisNumberPrime, playerName);