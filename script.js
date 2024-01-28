const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const romanNumerals = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I'
]

const inputValid = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    output.textContent = "Please enter a valid number";
    numberInput.value = '';
    return;
  }

  if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    numberInput.value = '';
    return;
  }

  if (inputInt > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    numberInput.value = '';
    return;
  }

  romanConverter(inputInt);
  numberInput.value = '';
};

const romanConverter = (num) => {
  const numerals = [];
  const numString = [];

  numerals.push(Math.floor(num / 1000));
  num = num % 1000;
  numerals.push(Math.floor(num / 900));
  num = num % 900;
  numerals.push(Math.floor(num / 500));
  num = num % 500;
  numerals.push(Math.floor(num / 400));
  num = num % 400;
  numerals.push(Math.floor(num / 100));
  num = num % 100;
  numerals.push(Math.floor(num / 90));
  num = num % 90;
  numerals.push(Math.floor(num / 50));
  num = num % 50;
  numerals.push(Math.floor(num / 40));
  num = num % 40;
  numerals.push(Math.floor(num / 10));
  num = num % 10;
  numerals.push(Math.floor(num / 9));
  num = num % 9;
  numerals.push(Math.floor(num / 5));
  num = num % 5;
  numerals.push(Math.floor(num / 4));
  num = num % 4;
  numerals.push(Math.floor(num / 1));
  num = num % 1;

  for (let i = 0; i < numerals.length; i++) {
    for (let c = 0; c < numerals[i]; c++) {
      numString.push(romanNumerals[i]);
    }
  }

  output.textContent = numString.toString().replace(/,/g, '');

};

convertBtn.addEventListener("click", inputValid);

numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    inputValid();
  }
});