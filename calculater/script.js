let inputBox = document.getElementById('inputbox');


let currentInput = "";
let operator = "";
let firstOperand = null;
let result = null;


function updateInput(value) {
    currentInput += value;
    inputBox.value = currentInput;
}

function clearInput() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    result = null;
    inputBox.value = "0";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        inputBox.value = "0";
    } else {
        inputBox.value = currentInput;
    }
}

function calculate() {
    if (firstOperand !== null && operator !== "" && currentInput !== "") {
        let secondOperand = parseFloat(currentInput);
        
        if (operator === "+") {
            result = firstOperand + secondOperand;
        } else if (operator === "-") {
            result = firstOperand - secondOperand;
        } else if (operator === "*") {
            result = firstOperand * secondOperand;
        } else if (operator === "/") {
            if (secondOperand === 0) {
                inputBox.value = "Error";
                return;
            }
            result = firstOperand / secondOperand;
        } else if (operator === "%") {
            result = firstOperand % secondOperand;
        }
        
        inputBox.value = result;
        currentInput = result.toString();
        firstOperand = result;
    }
}

function handleOperator(value) {
    if (currentInput !== "") {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            calculate();  
        }
        operator = value;
        currentInput = ""; 
    }
}

function evaluateExpression() {
    if (operator !== "" && currentInput !== "") {
        calculate();
        operator = "";  
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "AC") {
            clearInput();   
        } else if (value === "DEL") {
            deleteLast();   
        } else if (value === "=") {
            evaluateExpression();  
        } else if (["+", "-", "*", "/", "%"].includes(value)) {
            handleOperator(value); 
        } else {
            updateInput(value);     
        }
    });
});




