import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const isOdd = (questionNum) => questionNum % 2 !== 0;

const generateGameData = () => {
  const questionNum = generateRandomNum(100, 1);

  const gameQuestion = `Question: ${questionNum}`;

  let answer = '';
  if (isOdd(questionNum) === false) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const questionAndAnswerArr = [gameQuestion, answer];
  return questionAndAnswerArr;
};

const launchBrainEven = () => {
  const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLogic(generalQuestion, generateGameData);
};

export default launchBrainEven;