const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener("click", () => {
  if (textInput.textContent === '') {
    alert('Please input a value');
  }
});