import * as readlineSync from 'readline-sync';

const startGame = (description, askAndAnswer) => {
      console.log('Welcome to the Brain Games!');
      const userName = readlineSync.question('May I have your name? ');
      console.log(`Hello, ${userName}!`);
      console.log(description);
      
      const round = 2;
      for (let i = 0; i <= round; i += 1) {
            const [question, gameAnswer] = askAndAnswer();
            console.log(`Question: ${question}`);
            const answer = readlineSync.question('Your answer: ');
            const rightAnswer = gameAnswer;
            
            if (answer === rightAnswer) {
                  console.log ('Correct!');
            }
            else {
                  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
            return;
            }
      };
      console.log(`Congratulations, ${userName}!`);
}

export {startGame};