let string = "";
let buttons = document.querySelectorAll('button');
let inputField = document.querySelector('.input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;
    handleInput(buttonText);
  });
});

inputField.addEventListener('input', () => {
  let input = inputField.value.trim();
  handleInput(input);
});

function handleInput(input) {
  if (input === 'AC') {
    string = "";
    inputField.value = '0';
  } else if (input === '+/-') {
    string = (parseFloat(string) * -1).toString();
    inputField.value = string;
  } else if (input === '%') {
    string += '%';
    inputField.value = string;
  } else if (input === '=') {
    calculate();
  } else {
    string += input;
    inputField.value = string;
  }
}

function calculate() {
  try {
    let expression = string.replace('%', '/100');
    expression = expression.replace(/x/g, '*');
    let result = eval(expression);
    inputField.value = result;
    string = result.toString();
  } catch (error) {
    inputField.value = 'Error';
    string = '';
  }
}
