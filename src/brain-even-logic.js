import * as readlineSync from 'readline-sync';
import {startGame} from '../src/index.js';

    const description = 'Answer "yes" if the number is even, otherwise answer "no".'; 
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const isEven = (question) => question % 2 === 0;
    const askAndAnswer = () => {
      const question = getRandomNumber();
      const gameAnswer = isEven(question) ? 'yes' : 'no';
      return [question, gameAnswer];
    }
       
    
const quizEven = () => startGame(description, askAndAnswer);
export default quizEven;