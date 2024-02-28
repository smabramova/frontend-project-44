#!/usr/bin/env node 
 

import readlineSync from 'readline-sync'; 
import  greetUser from '../src/cli.js'; 
import threeRoundsGame from '../src/index.js'; 

const playerName = helloUnknownName(); 

const arithmeticProgression = () => { 
  console.log('What number is missing in the progression?'); 
  const randomNumberFromZeroToFifty = 51; 
  const randomNumberFromOneToTen = 9; 
  const randomNumberFromZeroToTen = 10; 
  const antiZero = 1; 
  const randomStartsNum = Math.floor(Math.random() * randomNumberFromZeroToFifty); 
  const randomStepUp = Math.floor(Math.random() * randomNumberFromOneToTen + antiZero); 
  const randomPositionHide = Math.floor(Math.random() * randomNumberFromZeroToTen); 
  const questionArr = []; 
  let resultForGame; 



  for (let i = randomStartsNum; questionArr.length < 10; i += randomStepUp) { 
    questionArr.push(i); 
  } 
  const correctAnswerToTheQuestion = questionArr[randomPositionHide]; 
  questionArr[randomPositionHide] = '..'; 

  const questionArrToStringForTZ = questionArr.join(' '); 



  console.log(`Question: ${questionArrToStringForTZ}`); 
  const playerAnswer = readlineSync.question('Your answer: '); 
  if (playerAnswer !== correctAnswerToTheQuestion.toString()) { 
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerToTheQuestion}'.\nLet's try again, ${playerName}!`); 
    resultForGame = 'Defeat'; 
    return resultForGame; 
  } 

  resultForGame = 'Win'; 
  console.log('Correct!'); 
  return resultForGame; 
}; 

threeRoundsGame(arithmeticProgression, playerName);