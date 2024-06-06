import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const countGCDFromTwoNums = (randomNum1, randomNum2) => {
  const smaller = Math.min(randomNum1, randomNum2);
  let gcd = 1;

  for (let i = 1; i <= smaller; i += 1) {
    if (randomNum1 % i === 0 && randomNum2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateGameData = () => {
  const randomNum1 = generateRandomNum(20, 1);
  const randomNum2 = generateRandomNum(20, 1);
  const question = randomNum2;

  const gameQuestion = `Question: ${randomNum1} ${question}`;
  const answer = String(countGCDFromTwoNums(randomNum1, randomNum2));

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const launchBrainGCD = () => {
  const generalQuestion = 'Find the greatest common divisor of given numbers.';
  gameLogic(generalQuestion, generateGameData);
};

export default launchBrainGCD;