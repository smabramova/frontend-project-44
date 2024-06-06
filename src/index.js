import readlineSync from 'readline-sync';

const gameLogic = (generalQuestion, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(generalQuestion);

  let counterOfRounds;
  for (counterOfRounds = 0; counterOfRounds < 3; counterOfRounds += 1) {
    const questionAndCorrectAnswer = questionAndAnswer();

    console.log(questionAndCorrectAnswer[0]);

    const userAnswer = readlineSync.question('Your answer: ');

    if ((questionAndCorrectAnswer[1]) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAndCorrectAnswer[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;