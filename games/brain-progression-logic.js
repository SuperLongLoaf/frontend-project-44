import {startGame} from '../src/index.js';
const description = 'What number is missing in the progression?'; 

const askAndAnswer = () => {
    const questProgression = (num1, num2) => {
        const progression = [num1];
        let result = num1;
        for (let i = 0; i < 9; i += 1) {
            result = result + num2
            progression.push(result);
            }
        return progression;
    };

    let getRandomNumber20 = () => Math.floor(Math.random() * 20);
    let getRandomNumber10 = () => Math.floor(Math.random() * 10);
    let number1 = getRandomNumber20();
    let number2 = getRandomNumber10();
    let number3 = getRandomNumber10();

    const questArr = questProgression(number1, number2);
    const gameAnswer = questArr[number3];


    const questionArr = (arr, num3) => {
        arr[num3] = '..';
        return(arr);
    };  

  const question = questionArr(questArr, number3);
  
  return [question, gameAnswer.toString()];
};
    
const quizProgression = () => startGame(description, askAndAnswer);
export default quizProgression;
       