import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    const firstInt = getRandomInteger(2, 80);
    const step = getRandomInteger(2, 29);
    const hiddenNumber = getRandomInteger(0, 9);
    let question = '';
    for (let counter2 = 0; counter2 < 10; counter2 += 1) {
      if (counter2 === hiddenNumber) {
        question = `${question} ..`;
        questionPair[1] = String(firstInt + (step * counter2));
      } else {
        question = `${question} ${String(firstInt + (step * counter2))}`;
      }
    }
    questionPair[0] = question.trim();
    question = '';
    questionList[counter] = questionPair;
  }
  console.log('What number is missing in the progression?');
  return questionList;
};
