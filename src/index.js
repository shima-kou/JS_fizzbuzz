const fizzbuzz = () => {
  const fizzNum = Number(document.getElementById("FizzNum").value);
  const buzzNum = Number(document.getElementById("BuzzNum").value);
  const fizzBuzzArray = [];
  const fizzBuzzText = [];
  const fizzBuzzResult = document.getElementById("fizzbuzz-result");

  if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
    fizzBuzzResult.textContent = "整数値を入力してください。";
    return false;
  } else if (fizzNum > 99 || buzzNum > 99) {
    fizzBuzzResult.textContent = "2桁以下の整数で入力してください。";
    return false;
  }

  for (let i = 1; i < 100; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      fizzBuzzArray.push("FizzBuzz" + i);
    } else if (i % fizzNum === 0) {
      fizzBuzzArray.push("Fizz" + i);
    } else if (i % buzzNum === 0) {
      fizzBuzzArray.push("Buzz" + i);
    }
  }

  for (const v of fizzBuzzArray) {
    fizzBuzzText.push("<p>" + v + "</p>");
  }

  const fizzBuzzHTML = fizzBuzzText.join("");

  fizzBuzzResult.innerHTML = fizzBuzzHTML;
};

const actionButton = document.getElementById("actionButton");
actionButton.addEventListener("click", fizzbuzz);
