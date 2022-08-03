let num1 = '';
let num2 = '';
let result = '';
let operator = '';


//-------------DISPLAYS CHOSEN OPERATOR IN DISPLAY AREA
const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', event => {
        operator = event.target.textContent;
        display.textContent = operator;
        console.log(operator)
    })
 })
let clear = document.querySelector('#clear');
    clear.addEventListener('click', ()=> {
        this.num1 = '';
        this.num2 = '';
        this.result = '';
        
        display.textContent = '';
    });

    let addNumbers = document.querySelector('#add')

     //-----------DISPLAYS NUMBERS IN DISPLAY AREA
     const numbers = document.querySelectorAll('.number');
     numbers.forEach(number => {
        number.addEventListener('click', event => {
            if (operator === '') { 
                num1 += event.target.textContent;
                display.textContent = num1;
                console.log(num1);
                return parseInt(num1);
            } else {
                num2 += event.target.textContent;
                display.textContent = num2;
                console.log(num2)
                return parseInt(num2);
            }
        });
    });

const equals = document.querySelector('#equals');
    equals.addEventListener('click', operate);

//basic operatator functions
function add() {
    result = parseInt(num1) + parseInt(num2);
    display.textContent = parseInt(num1) + parseInt(num2);
    //console.log(parseInt(num1) + parseInt(num2))
    console.log(result)

  
}

function subtract() {
    result = parseInt(num1) - parseInt(num2);
    display.textContent = num1 - num2;
    console.log(num1 - num2)
    
}

function multiply () {
    result = parseInt(num1) * parseInt(num2);
    display.textContent = num1 * num2;
    console.log(num1 * num2)
   
}

function divide() {
    if (num2 == 0) {
       display.textContent = 'Cannot divide by 0';
       return "Cannot divide by 0"
    } else {
   
   display.textContent = num1 / num2;
   console.log(num1 / num2)
   let result = parseInt(num1) / parseInt(num2);
    }    
}