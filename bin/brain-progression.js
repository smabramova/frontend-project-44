#!/usr/bin/env node 
 
import readlineSync from 'readline-sync'; 
import  greetUser from '../src/cli.js'; 
import threeRoundsGame from '../src/index.js'; 


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  

  const minStep = 1;
  const maxStep = 10;
  const minStart = 1;
  const maxStart = 20;
  const progressionLength = getRandomNumber(5, 10);
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minStart, maxStart);
  const progression = generateProgression(progressionLength, start, step);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  console.log(`Question: ${question}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  if (hiddenElementIndex === progressionLength - 1) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  
  playProgressionGame();
};

export default playProgressionGame;

