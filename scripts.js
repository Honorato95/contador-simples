let currentNumberElement = document.getElementById('currentNumber');
let currentNumber = 0;
let buttonSubtract = document.getElementsByName('subtract')[0];
let buttonAdd = document.getElementsByName('add')[0];

let increment = () => {
    ++currentNumber;
    currentNumberElement.innerHTML = currentNumber;
    if(currentNumber > 0) {
        buttonSubtract.removeAttribute('disabled')
    }
};
buttonAdd.addEventListener('click', increment)

let decrement = () => {
    --currentNumber;
    currentNumberElement.innerHTML = currentNumber;
    if(currentNumber <= 0) {
        currentNumber = 0;
        currentNumberElement.innerHTML = currentNumber;
    }
};
buttonSubtract.addEventListener('click', decrement)
