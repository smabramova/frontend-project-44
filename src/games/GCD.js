import getRandomInteger from '../getRandomInteger.js';

export default () => {
  const questionList = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const questionPair = [];
    const firstInt = getRandomInteger(2, 100);
    const secondInt = getRandomInteger(2, 100);
    let starter = firstInt;

    // функция считает половину заданного числа и округляет результат до целого числа
    const roundHalf = (number) => (Math.round(number / 2));

    // путем сравнения двух чисел между собой и с 1/2 бОльшего числа определяем
    // с какого числа будем начинать цикл.
    if (firstInt !== secondInt) {
      if (firstInt > secondInt) {
        if (roundHalf(firstInt) > secondInt) {
          starter = secondInt;
        } else starter = roundHalf(firstInt);
      } else if (roundHalf(secondInt) > firstInt) {
        starter = firstInt;
      } else starter = roundHalf(secondInt);
    } else starter = firstInt;
    for (starter; starter > 0; starter -= 1) {
      if ((firstInt % starter === 0) && (secondInt % starter === 0)) {
        break;
      }
    }
    questionPair[0] = `${firstInt} ${secondInt}`;
    questionPair[1] = String(starter);
    questionList[counter] = questionPair;
  }
  console.log('Find the greatest common divisor of given numbers.');
  return questionList;
};
