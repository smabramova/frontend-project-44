import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const generateAnswer = (mathAct, randomNum1, randomNum2) => {
  let answer = '';
  // eslint-disable-next-line default-case
  switch (mathAct) {
    case '+':
      answer = randomNum1 + randomNum2;
      break;
    case '-':
      answer = randomNum1 - randomNum2;
      break;
    case '*':
      answer = randomNum1 * randomNum2;
      break;
  }
  return answer;
};

const generateGameData = () => {
  const randomNum1 = generateRandomNum(100, 1);
  const randomNum2 = generateRandomNum(100, 1);
  const mathOperators = ['+', '-', '*'];
  const mathAct = generateRandomNum(3, 0);

  const gameQuestion = `Question: ${randomNum1} ${mathOperators[mathAct]} ${randomNum2}`;
  const answer = String(generateAnswer(mathOperators[mathAct], randomNum1, randomNum2));

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const launchBrainCalc = () => {
  const generalQuestion = 'What is the result of the expression?';
  gameLogic(generalQuestion, generateGameData);
};

export default launchBrainCalc;