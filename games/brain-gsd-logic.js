import {startGame} from '../src/index.js';
const description = 'Find the greatest common divisor of given numbers.'; 

const askAndAnswer = () => {
    const commonDivider = (num1, num2) => {

        const fn = (number) => {
            let denom = [];
            for (let i = 1; i <= number; i+=1) {
                if ( number % i === 0) {
                    denom.push(i);
                }
            } return denom;
        };
     
        const denom1 = fn(num1);
        const denom2 = fn(num2);
        const dividers = [];
        for (const item1 of denom1) {
             if (denom2.includes(item1)) {
                dividers.push(item1);
                }
            }
            return dividers.sort((a,b)=> b - a)[0]
    };
      
  const getRandomNumber = () => Math.floor(Math.random() * 30);
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1}     ${num2}`;
  const gameAnswer = commonDivider(num1,num2);
  
  return [question, gameAnswer.toString()];
};
    
const quizGSD = () => startGame(description, askAndAnswer);
export default quizGSD;
       