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
// let clear = document.querySelector('#clear');
//     clear.addEventListener('click', ()=> {
//         this.num1 = '';
//         this.num2 = '';
//         this.result = '';
        
//         display.textContent = '';
//     });

    let addNumbers = document.querySelector('#add')

     //-----------DISPLAYS NUMBERS IN DISPLAY AREA
     const numbers = document.querySelectorAll('.number');
     numbers.forEach(number => {
        number.addEventListener('click', event => {
            if (operator === '') { 
                num1 += event.target.textContent;
                display.textContent = num1;
                console.log(num1);
                return parseFloat(num1);
            } else {
                num2 += event.target.textContent;
                display.textContent = num2;
                console.log(num2)
                return parseFloat(num2);
            }
        });
    });

const equals = document.querySelector('#equals');
    equals.addEventListener('click', operate);

//basic operatator functions
function add() {
    result = parseFloat(num1) + parseFloat(num2);
    display.textContent = parseFloat(num1) + parseFloat(num2);
    //console.log(parseInt(num1) + parseInt(num2))
    console.log(result)

  
}

function subtract() {
    result = parseFloat(num1) - parseFloat(num2);
    display.textContent = num1 - num2;
    console.log(num1 - num2)
    
}

function multiply () {
    result = parseFloat(num1) * parseFloat(num2);
    display.textContent = num1 * num2;
    console.log(num1 * num2)
   
}

function divide() {
    if (num2 == 0) {
       display.textContent = 'Cannot divide by 0';
       return "Cannot divide by 0"
    } else {
   result = parseFloat(num1) / parseFloat(num2);
   display.textContent = num1 / num2;
   console.log(num1 / num2)
   //let result = parseInt(num1) / parseInt(num2);
    }    
};


function operate() {
    if (operator == '+'){
           add();
            num2 = ''
            return num1 = result;
         return num1 = '';
        } if (operator == '-') {
            subtract()
            num2 = '';
            return num1 = result;
        } if (operator == 'x') {
            multiply()
            num2 = '';
           return num1 = result;
        } if (operator == '/') {
            divide()
           num2 = '';
            return num1 = result;
        } 
       
    }
