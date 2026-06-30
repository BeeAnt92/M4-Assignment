//STEP 1
let num1 = prompt("Enter a number between 1 and 10")
let num2 = 2
function halfNumber() {
    return num1 / num2
}
console.log(`Half of ${num1} is ${halfNumber()}`)

//STEP 2
let num1 = prompt("Enter a number between 1 and 10")
function squareNumber() {
    return num1 * num1
}
console.log(`The result of squaring the number ${num1} is ${squareNumber()}`)
//STEP 3
let num1 = prompt("Enter a number between 1 and 10")
function percentOf() {
    return num1 * .5
}
console.log(`${percentOf()} is 50% of ${num1}`)
//STEP 4
let num1 = prompt("Enter a number between 1 and 10")
let num2 = prompt("Enter another number between 1 and 10")
function findModulus() {
    return num1 % num2 
}
console.log(`${findModulus(parseInt())} is the modulus of ${num2} and ${num1}`)
//STEP 5