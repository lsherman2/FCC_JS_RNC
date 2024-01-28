const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

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

convertBtn.addEventListener("click", inputValid);

numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    inputValid();
  }
});