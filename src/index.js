import readlineSync from 'readline-sync';
import greetingName from './cli.js';

export default (getGameData) => {
  const name = greetingName();
  const questionList = getGameData();

  for (let counter = 0; counter < 3; counter += 1) {
    console.log(`Question: ${questionList[counter][0]}`);
    const playerAnswer = readlineSync.question('Your Answer: ');
    if (playerAnswer === questionList[counter][1]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${questionList[counter][1]}'. \n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
