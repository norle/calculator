function add(x, y) {
    x = Number(x)
    y = Number(y)
    return x + y
}
function subtract(x, y) {
    x = Number(x)
    y = Number(y)
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    x = Number(x)
    y = Number(y)
    return x / y
}



let x = 'empty';
let y = 'empty';
let operator = 'empty';
let firstNumber = 'empty';
let secondNumber = 'empty';
let result = 'empty';
let enter = 'empty'

function clearAll() {
    x = 'empty';
    y = 'empty';
    operator = 'empty';
    firstNumber = 'empty';
    secondNumber = 'empty';
    result = 'empty';
    enter = 'empty'
    console.log('clear')
}


//adds event listeners to each number
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {

    number.addEventListener('click', value => {

        x = number.getAttribute('data-number')


        if (firstNumber == 'empty') {
            firstNumber = x
        }
        else if (operator !== 'back' && operator !== 'empty') {
            if (secondNumber == 'empty') {
                secondNumber = x
            }
            else {
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
            if (secondNumber == 'empty') {
                firstNumber = firstNumber.slice(0, result.length - 1);
            }
            else {
                secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            }
        }
        else if (operatorfunc.id !== 'enter') {
            operator = operatorfunc.id
            /* console.log(operator) */
        }

    }

    )
})
//clear listener
document.querySelector('.clear').addEventListener('click', e => {
    clearAll()
    displayUpdate()
    
})
//logic of enter
document.querySelector('#enter').addEventListener('click', e => {
    if (operator == '+') {
        result = add(firstNumber, secondNumber)
    }
    if (operator == '-') {
        result = subtract(firstNumber, secondNumber)
    }
    if (operator == '/') {
        result = divide(firstNumber, secondNumber)
    }
    if (operator == '*') {
        result = multiply(firstNumber, secondNumber)
    }
    enter = 1
    console.log(operator)


})

//display manipulation eventlistener
document.addEventListener('click', displayUpdate)


//display update function
function displayUpdate(){
    console.log('update')
    if (secondNumber === '') {
        secondNumber = 'empty';
        operator = 'empty'
    }
    if (firstNumber === '') {
        firstNumber = 'empty';
    }
    if (operator == 'back' || operator == 'empty') {
        result = firstNumber
        if (operator == 'back' && secondNumber !== 'empty') {
            result += operator + secondNumber
        }
        console.log(operator)
    }
    else if (enter !== 1) {
        console.log('x')
        result = firstNumber + operator;
        if (secondNumber !== 'empty') {
            result += secondNumber
        }

    }
    if (result !== 'empty') {
        document.querySelector(".result").innerHTML = result;
    }
    else{
        document.querySelector(".result").innerHTML = '';
    }
}
