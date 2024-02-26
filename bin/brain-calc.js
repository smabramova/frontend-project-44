#!/usr/bin/env node

import readlineSync from 'readline-sync';
import geetUser from '../src/cli.js';
import threeRoundsGame from '../src/index.js';

const userName = geetUser();

const goCalculate = () => {
    const possibleOperations = 3;
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    const operation = Math.floor(Math.random() * possibleOperations);
  
    let signForQuestion;
    if (operation === 0) {
      signForQuestion = '+';
    } else if (operation === 1) {
      signForQuestion = '-';
    } else {
      signForQuestion = '*';
    }
  
    let correctAnswer;
    if (operation === 0) {
      correctAnswer = firstRandomNumber + secondRandomNumber;
    } else if (operation === 1) {
      correctAnswer = firstRandomNumber - secondRandomNumber;
    } else {
      correctAnswer = firstRandomNumber * secondRandomNumber;
    }
  
    let result;
    console.log(`Question: ${firstRandomNumber} ${signForQuestion} ${secondRandomNumber}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== correctAnswer.toString()) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!)`);
      result = 'Defeat';
      return result;
    }
    result = 'Win';
    console.log('Correct!');
    return result;
  };
  
  threeRoundsGame(goCalculate, userName);