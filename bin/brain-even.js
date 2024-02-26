#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from "../src/cli.js";

const thisNumberEven = () => {
  const userName = greetUser();
  const firstRandomNumber = Math.floor(Math.random() * 100);
  const secondRandomNumber = Math.floor(Math.random() * 100);
  const thirdRandomNumber = Math.floor(Math.random() * 100);
  const correctAnswerToTheFirstQuestion = () => (firstRandomNumber % 2 === 0 ? 'yes' : 'no');
  const correctAnswerToTheSecondQuestion = () => (secondRandomNumber % 2 === 0 ? 'yes' : 'no');
  const correctAnswerToTheThirdQuestion = () => (thirdRandomNumber % 2 === 0 ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const firstAnswer = readlineSync.question(`Question: ${firstRandomNumber} `);
  if (firstAnswer !== correctAnswerToTheFirstQuestion()) {
    return console.log(`'${firstAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheFirstQuestion()}'.\nLet's try again, ${userName}!`);
  }
  console.log('Correct!');
  const secondAnswer = readlineSync.question(`Question: ${secondRandomNumber} `);
  if (secondAnswer !== correctAnswerToTheSecondQuestion()) {
    return console.log(`'${secondAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheSecondQuestion()}'.\nLet's try again, ${userName}!`);
  }
  console.log('Correct!');
  const thirdAnswer = readlineSync.question(`Question: ${thirdRandomNumber} `);
  if (thirdAnswer !== correctAnswerToTheThirdQuestion()) {
    return console.log(`'${thirdAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheThirdQuestion()}'.\nLet's try again, ${userName}!`);
  }
  return console.log(`Correct!\nCongratulations, ${userName}`);
};

export default thisNumberEven;

thisNumberEven();
