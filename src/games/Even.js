import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    questionPair[0] = getRandomInteger(1, 99);
    questionPair[1] = ((questionPair[0] % 2 === 0) ? 'yes' : 'no');
    questionList[counter] = questionPair;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return questionList;
};