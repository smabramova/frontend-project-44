import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const mathOperations = ['+', '-', '*'];
    const questionPair = [];
    const mathSign = getRandomInteger(0, 2);
    const firstInt = getRandomInteger(3, 70);
    const secondInt = getRandomInteger(1, 10);
    questionPair[0] = `${firstInt} ${mathOperations[mathSign]} ${secondInt}`;
    let calculated = 0;

    switch (mathSign) {
      case 0:
        calculated = firstInt + secondInt;
        break;
      case 1:
        calculated = firstInt - secondInt;
        break;
      case 2:
        calculated = firstInt * secondInt;
        break;
      default:
        break;
    }

    questionPair[1] = String(calculated);
    questionList[counter] = questionPair;
  }
  console.log('What is the result of the expression?');
  return questionList;
};
