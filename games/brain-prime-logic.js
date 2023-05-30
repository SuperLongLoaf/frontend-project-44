import {startGame} from '../src/index.js';

    const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'; 
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const isPrime = (question) => {
    if (question < 2) {
        return false;
      }
    for (let i = 2; i <= question / 2; i += 1)
      if (question % i === 0) {
          return false;
      }
      return true;
    };
    const askAndAnswer = () => {
      const question = getRandomNumber();
      const gameAnswer = isPrime(question) ? 'yes' : 'no';
      return [question, gameAnswer];
    }
       
    
const quizPrime = () => startGame(description, askAndAnswer);
export default quizPrime; 