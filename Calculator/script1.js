let CE = document.querySelector('#CE');
let seven = document.querySelector('#seven');
let multiplication = document.querySelector('#multiply');
let eight = document.querySelector('#eight');

let input = document.querySelector('.textfield');
let equal = document.querySelector('#equal');


function add(value1, value2){
    return value1 + value2;
}

function subtract(value1, value2){
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    return value1 / value2;
}

function operate(operator, value1, value2){
    let result;

    switch (operator){
        case "+":
           result =  add(value1,value2);
            break;
        case "-":
            result = subtract(value1,value2);
            break;
        case "*":
            result = multiply(value1,value2);
            break;
        case "/":
            result =  divide(value1,value2);
            break;
    }

    return result;
}


seven.addEventListener('click', () =>{
    input.value = "7";
    value.push(7);
});

multiplication.addEventListener('click', () =>{
    input.value = "*";
    value.push('*');
});

eight.addEventListener('click', () =>{
    input.value = "8";
    value.push(8);
});

equal.addEventListener('click', () =>{
    let result = operate(operator, value1, value2);
    input.value = result;
});

