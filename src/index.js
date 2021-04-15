const createFizzBuzz = () => {
  const fizzNum = Number(document.getElementById('FizzNum').value);
  const buzzNum = Number(document.getElementById('BuzzNum').value);
  const fizzBuzzResult = document.getElementById('fizzbuzz-result');

  if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
    fizzBuzzResult.innerHTML = '整数値を入力してください。';
    return false;
  } else if (fizzNum > 99 || buzzNum > 99) {
    fizzBuzzResult.innerHTML = '2桁以下の整数で入力してください。';
    return false;
  }

  fizzBuzzResult.innerHTML = '';
  for (let i = 1; i < 100; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      fizzBuzzResult.insertAdjacentHTML('beforeend', '<p>' + 'FizzBuzz' + i + '</p>');
    } else if (i % fizzNum === 0) {
      fizzBuzzResult.insertAdjacentHTML('beforeend', '<p>' + 'Fizz' + i + '</p>');
    } else if (i % buzzNum === 0) {
      fizzBuzzResult.insertAdjacentHTML('beforeend', '<p>' + 'Buzz' + i + '</p>');
    }
  }
};

const actionButton = document.getElementById('actionButton');
actionButton.addEventListener('click', createFizzBuzz);
