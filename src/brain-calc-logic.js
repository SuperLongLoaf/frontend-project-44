import { startGame} from '../src/index.js';

const description = 'What is the result of the expression?'; 

const askAndAnswer = () => {
  const operators = [{
    sign: "+",
    method: function(a,b){ return a + b; }
  },{
    sign: "-",
    method: function(a,b){ return a - b; }
  },{
    sign: "*",
    method: function(a,b){ return a * b; }
    }
  ];
  const selectedOperator = Math.floor(Math.random() * operators.length);
      
  const getRandomNumber = () => Math.floor(Math.random() * 30);
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${operators[selectedOperator].sign} ${num2}`;
  const gameAnswer = operators[selectedOperator].method(num1, num2);
  
  return [question, gameAnswer.toString()];
};
    
const quizCalc = () => startGame(description, askAndAnswer);
export default quizCalc;