const result = document.getElementById('result')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText == '=') {
      result.value = eval(result.value)
    } else if (button.value === 'c') {
      result.value = '';
    } else {
      result.value += button.value;
    }
  })
})