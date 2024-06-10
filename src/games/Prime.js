import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    questionPair[0] = getRandomInteger(2, 100);
    let starter = Math.round(questionPair[0] / 2);
    for (starter; starter > 0; starter -= 1) {
      if (questionPair[0] % starter === 0) {
        break;
      }
    }
    questionPair[1] = 'yes';
    if (starter > 1) {
      questionPair[1] = 'no';
    }
    questionList[counter] = questionPair;
  }
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return questionList;
};