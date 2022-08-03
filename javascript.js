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