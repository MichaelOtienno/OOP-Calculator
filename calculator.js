class Calculator {
  constructor() {
      this.display = document.querySelector('.display');
      this.numbers = document.querySelectorAll('.number');
      this.operators = document.querySelectorAll('.operators');
      this.answer = document.querySelector('.answer');
      this.backSpace = document.querySelector('.clear');
      this.clearEntry = document.querySelector('.clearEntry');
      this.initEventListeners();
  }

  calculation() {
      const expression = this.display.textContent;
      try {
          const calculator = expression.replace(/[^-()\d/*+.]/g, '');
          const result = new Function('return ' + calculator)();
          this.display.textContent = result;
      } catch (error) {
          this.display.textContent = 'Error';
      }
  }

  initEventListeners() {
      this.numbers.forEach(button => {
          button.addEventListener('click', () => {
              this.appendToDisplay(button.textContent);
          });
      });

      this.operators.forEach(operator => {
          operator.addEventListener('click', () => {
              this.appendToDisplay(operator.textContent);
          });
      });

      this.answer.addEventListener('click', () => {
          this.calculation();
      });

      this.backSpace.addEventListener('click', () => {
          this.backspace()
         
      });

      this.clearEntry.addEventListener('click', () => {
          this.clearDisplay()

      });


  }

  appendToDisplay(text) {
      this.display.textContent += text;
  }

  clearDisplay() {
      this.display.textContent = '';
  }

  backspace() {
      const currentText = this.display.textContent;
      this.display.textContent = currentText.slice(0, -1);
  }
  




}
const calculator = new Calculator();


// numbers.forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         const number = button.textContent;
//         display.textContent += number
//     })

// })

// function calculation() {
//     const expression = display.textContent;
//     try {
//         const calculator = expression.replace(/[^-()\d/*+.]/g, '');
//         const result = new Function('return ' + calculator)();
//         display.textContent = result;
//     } catch (error) {
//         display.textContent = 'Error';
//     }
// }

// operators.forEach(operator => {
//     operator.addEventListener('click', (e) => {
//         e.preventDefault();
//         const Operator = operator.textContent
//         display.textContent += Operator
//     })
// })

// answer.addEventListener('click', () => {
//     calculation();
// });







