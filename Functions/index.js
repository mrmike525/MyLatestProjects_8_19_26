function add(a, b) {
    return a + b
};
const addAlpha = add(7, 4);

function multiply(a, b) {
    return a * b
};
const multiplyAlpha = multiply(7, 4);

function subtract(a, b) {
    return a - b
}

const subtractAlpha = subtract(7, 4);

function divide(a, b) {
    return a / b
};
const divideAlpha = divide(7, 4);

const returnAll = (a, b) => ([add(a, b), multiply(a, b), subtract(a, b), divide(a, b)]);
const allfunctionsAlpha = () => returnAll(7, 4);



const body = document.body;
const buttonAlpha = document.createElement('button');
buttonAlpha.innerText = "CountAlpha";
const span = document.createElement('span');

span.style.display = "block"
body.append(span)
body.append(buttonAlpha);
const increaseByOne = count();
span.innerText = 0;

function count(){
    let count = 1;
    return () => count++
}
buttonAlpha.addEventListener('click', () => {
    span.innerText = increaseByOne()
 })

