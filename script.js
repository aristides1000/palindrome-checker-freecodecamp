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
});