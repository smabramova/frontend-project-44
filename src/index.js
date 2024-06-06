import readlineSync from 'readline-sync';
import userGreetings from './cli.js';

const startGame = (generateGameStage, descriptionOfTheQuestion) => {
  const needRoundsAmount = 3;

  const playerName = userGreetings();
  console.log(descriptionOfTheQuestion);

  for (let i = 0; i < needRoundsAmount; i += 1) {
    const [question, answer] = generateGameStage();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${playerName}!`);
      return 'Defeat';
    }
  }

  return console.log(`Congratulations, ${playerName}!`);
};

export default startGame;