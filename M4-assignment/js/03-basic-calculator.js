// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {;
// COLLECT FIRST NUMBER FROM USER

// COLLECT SECOND NUMBER FROM USER

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result;

switch (operation) {
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '*':
        result = x * y;
        break;
    case '/':
        result = x / y;
    default:
        alert('Please enter a proper operator')
    }
    return result
} 


let again;
do {
    let x = parseFloat(prompt('Enter a value for x'));
    let y = parseFloat(prompt('Enter a value for y'));
    let operation = (prompt('Enter an operation, e.g., (+, -, *, /)'));

    let result = calculate(x, y, operation)
    alert(`The result is ${result}!`)

    again = prompt('Would you like to enter another operation? (y or n)', 'y')
} while(again === 'y')