#!/usr/bin/env node 
 

import readlineSync from 'readline-sync'; 
import threeRoundsGame from '../src/index.js'; 
import generateRandomNumber from '../src/helps.js';

const rule = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 10;

const getProgression = (start, step, length, hiddenIndex) => {
  const progression = Array(length).fill(0).map((_, i) => start + (step * i));
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const startRound = () => {
  const startNumber = generateRandomNumber(minRange, maxRange);
  const step = generateRandomNumber(minStep, maxStep);
  const length = generateRandomNumber(minLength, maxLength);
  const hiddenIndex = generateRandomNumber(2, length - 1);

  const expression = getProgression(startNumber, step, length, hiddenIndex);
  const answer = (startNumber + step * hiddenIndex).toString();

  return {
    answer,
    expression,
  };
};

const runBrainProgressionGame = () => startEngine(rule, startRound);

export default runBrainProgressionGame;