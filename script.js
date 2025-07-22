const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener("click", () => {
  if (textInput.value.length === 0) {
    alert('Please input a value');
  }

  if (textInput.value.length === 1) {
    result.textContent = `${textInput.value} is a palindrome`;
  }

  const transformedText = "";

  const textLength = textInput.value.length;

  const calculatedHalfCeilText = Math.ceil(textLength / 2);

  const firstPartText = (textInput.value.length % 2 === 0) ?
                        textInput.value.slice(0, calculatedHalfCeilText) :
                        textInput.value.slice(0, calculatedHalfCeilText - 1);
  const secondPartText = (textInput.value.length % 2 === 0) ?
                        textInput.value.slice(calculatedHalfCeilText, textLength) :
                        textInput.value.slice(calculatedHalfCeilText, textLength);

  /* Steps to reverse second part of string */
  const reversedArray = [];
  let i = secondPartText.length;
  while (i >= 0) {
    reversedArray.push(secondPartText[i]);
    i--;
  }
  const reversedSecondPart = reversedArray.join('');
  /* End steps to reverse second part of string */

  result.textContent = (firstPartText === reversedSecondPart) ? `${textInput.value} is a palindrome` : `${textInput.value} is not a palindrome`;
});