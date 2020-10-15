function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}


let x;
let y;
let operator;
let firstNumber;
let secondNumber;
let result;


//adds event listeners to each number
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {

    number.addEventListener('click', value => {

        x = number.getAttribute('data-number')


        if (typeof firstNumber == "undefined") {
            firstNumber = x
        }
        else if(operator !== 'back' || typeof operator !== 'undefined'){
            if (typeof secondNumber == 'undefined'){
                secondNumber = x
            }
            else{
                secondNumber += x
            }
        }
        else {
            firstNumber += x;
        }
        console.log(firstNumber)

    })
})

//adds eventlistners to operators
const operators = document.querySelectorAll('.operator')
operators.forEach(operatorfunc => {

    operatorfunc.addEventListener('click', value => {
        if (operatorfunc.id == 'back') {
            if (typeof secondNumber == "undefined") {
                firstNumber = firstNumber.slice(0, result.length - 1);
            }
            else {
                secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            }
        }
        operator = operatorfunc.id
        /* console.log(operator) */


    }

    )
})
//display manipulation 
let display = 
document.addEventListener('click', e => {
    if (operator == 'back' || typeof operator == "undefined" ) {
        result = firstNumber
        console.log(operator)
    }
    else {
        console.log('x')
        result = firstNumber + operator;
        if (typeof secondNumber !== "undefined") {
            result += secondNumber
        }

    }
    document.querySelector(".result").innerHTML = result;
})
