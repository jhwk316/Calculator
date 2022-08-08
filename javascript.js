let num1 = [];
let num2 = [];
let result = [];
let operator = '';




let newCalculation = function(){
  num1 = '';
  num2 = '';
  result = ''
  operator = '';
  display.textContent = '';
}


function back() {
    display.textContent = display.textContent.slice(0, -1)
    if (!operator){
        return num1 = num1.slice(0, -1);
    } else {
        return num2 = num2.slice(0, -1);
    }
    
    
}



 //-----------DISPLAYS NUMBERS IN DISPLAY AREA
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
   number.addEventListener('click', event => {
       if (operator === '') { 
           num1 += event.target.textContent;
           display.textContent = num1;
           console.log(num1);
           return parseFloat(num1);
           
       }   else {
           num2 += event.target.textContent;
           display.textContent = num2;
           console.log(num2)
           return parseFloat(num2);
       } 
   });
});

//-------------DISPLAYS CHOSEN OPERATOR IN DISPLAY AREA
const operators = document.querySelectorAll('.operator');
   
operators.forEach(op => {
    op.addEventListener('click', event => {
        calculate();
        operator = event.target.textContent;
        display.textContent = operator;
        console.log(operator);
    }) 
        })
 

 //------------CLEAR BUTTON--------------------
let clear = document.querySelector('#clear');
     clear.addEventListener('click', newCalculation)

//-------------BACKSPACE BUTTON--------------------
let backSpace = document.querySelector('#backSpace');
    backSpace.addEventListener('click', back)


let squareBtn = document.querySelector('#square');
    squareBtn.addEventListener('click', squareNumber);

let squareRootBtn = document.querySelector('#squareRoot');
    squareRootBtn.addEventListener('click', squareRoot)   

let equals = document.querySelector('#equals');
    equals.addEventListener('click', calculate);


    //-------------BASIC OPERATOR FUNCTIONS
function add() {
    result = parseFloat(num1) + parseFloat(num2);
    console.log(result);
    num2 = '';
    num1 = result
    if(num1 % 1 != 0) {
    display.textContent = parseFloat(result.toFixed(10));
    } else {
        display.textContent = result
    }
    
}; 



function subtract() {
    result = parseFloat(num1) - parseFloat(num2);
    console.log(result);
    num2 = '';
    num1 = result;
    if(num1 % 1 != 0) {
        display.textContent = parseFloat(result.toFixed(10));
        } else {
            display.textContent = result
        } 
};

function multiply () {
    result = parseFloat(num1) * parseFloat(num2);
    console.log(result);
    num2 = '';
    num1 = result;
    if(num1 % 1 != 0) {
        display.textContent = parseFloat(result.toFixed(10));
        } else {
            display.textContent = result
        } 
}

function divide() {

        result = parseFloat(num1) / parseFloat(num2);
        console.log(result);
        num2 = '';
        num1 = result;
        if(num1 % 1 != 0) {
            display.textContent = parseFloat(result.toFixed(10));
            } else {
                display.textContent = result
            } 
    
};


function squareNumber(){
    result = parseFloat(num1 ** 2)
    display.textContent = result
    return num1 = result;
}

function squareRoot(){
    result = parseFloat(Math.sqrt(num1));
    display.textContent = result;
    num2 = '';
    return num1 = result;

}



function calculate() {
    if (operator == '+'){
           return add();
         
        } if (operator == '-') {
            subtract()
            
        } if (operator == 'x') {
            multiply()
            
          
        } if (operator == '/') {
          if (num2 == 0){
            display.textContent = 'A Black Hole Has Been Created'
          }  else {
            divide()  
          }
            
        } if (operator == 'C') {
            
           return newCalculation()
        } if (num1 === result) {
            return null
        } 
       
    };

    

