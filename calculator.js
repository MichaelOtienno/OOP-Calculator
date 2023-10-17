class Calculator {
  constructor() {
    this.display = document.querySelector('.display');
    this.numbers = document.querySelectorAll('.numbers button');
    this.operators = document.querySelectorAll('.operators button');
    this.answer = document.querySelector('.answer button');
    this.clear = document.querySelector('.clear button');
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
        this.appendToDisplay(button.textContent);
      });
    });

    this.answer.addEventListener('click', () => {
      this.calculation();
    });

    this.clear.addEventListener('click', () => {
      this.clearDisplay();
    });
  }

  appendToDisplay(text) {
    this.display.textContent += text;
  }

  clearDisplay() {
    this.display.textContent = '';
  }
}

const calculator = new Calculator();

