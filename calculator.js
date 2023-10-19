window.onload = function() {
  const display = document.querySelector('.display');
  display.textContent = "0";
};


class Calculator {

  constructor() {
      this.display = document.querySelector('.display');
      this.numbers = document.querySelectorAll('.number');
      this.operators = document.querySelectorAll('.operators');
      this.answer = document.querySelector('.answer');
      this.backSpace = document.querySelector('.clear');
      this.clearEntry = document.querySelector('.clearEntry');
      this.lightMode = document.querySelector('.lightModeButton');
     
      this.body = document.body;

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
    let isFirstInput = true;
      this.numbers.forEach(button => {
          button.addEventListener('click', () => {
            if(isFirstInput){
              this.clearDisplay();
              isFirstInput = false;
            }
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
          this.backspace();
          isFirstInput = true;
         
      });

      this.clearEntry.addEventListener('click', () => {
          this.clearDisplay();
          isFirstInput = true;
          this.display.textContent = '0'

      });
      this.lightMode.addEventListener('click',()=>{
        this.lightMOde()
      })


  }

  appendToDisplay(text) {
      this.display.textContent += text;
  }

  clearDisplay() {
      this.display.textContent = '';
  }

  backspace() {
    if (this.display.textContent == "Error" || this.display.textContent == "NaN") {
      this.display.textContent = '0';
    } else {
      const currentText = this.display.textContent;
      const newText = currentText.slice(0, -1);
      if (newText === "") {
        this.display.textContent = '0';
      } else {
        this.display.textContent = newText;
      }
    }
  }
  
  lightMOde() {
    if(this.body.style.backgroundColor == "white"){
      this.body.style.backgroundColor = "black";
      this.lightMode.textContent = 'Light Mode';
      this.display.style.color = "white";
    }else
    {this.body.style.backgroundColor = "white";
    this.lightMode.textContent = 'Dark Mode';
    this.display.style.color = "black"

  }
  }
  

}
const calculator = new Calculator();









