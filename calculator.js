
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers button');
const operators = document.querySelectorAll('.operators button');
const answer = document.querySelector('.answer button');
const clear = document.querySelector('.clear button');

//calculator function
function evaluateExpression(expression) {
    try {
      const calculator = expression.replace(/[^-()\d/*+.]/g, '');
      return new Function('return ' + calculator)();
    } catch (error) {
      return 'Error';
    }
  }
  
//numbers
numbers.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  });
});

//operators
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    display.textContent += ` ${operator.textContent} `;
  });
});


// calculation
answer.addEventListener('click', () => {
    const expression = display.textContent;
    const result = evaluateExpression(expression);
    display.textContent = result;
  });
  
//erase display
clear.addEventListener('click', () => {
  display.textContent = '';
});
