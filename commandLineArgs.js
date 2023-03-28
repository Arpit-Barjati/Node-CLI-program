import Calculator from "./Calculator.js";

let argumentVector = process.argv;

if(argumentVector.length < 4){
    throw new Error("Incomplete arguments");
}

const argumentsArray = argumentVector.slice(4);
const operation = argumentVector[3];

const validOperations = ["addition","subtraction","multiply","division"];

if(argumentVector[2]!=="--operation"){
    throw new Error("--operation keyword is not specified");
}

if(!validOperations.includes(operation)){
    throw new Error("Invalid operation");
}

argumentsArray.forEach(argument => {
    if(isNaN(argument)){
        throw new Error("Invalid arguments");
    }
});

switch(operation){
    case "addition":
        Calculator.addition(argumentsArray);
        break;
    case "subtraction":
        if(argumentsArray.length !== 2)
            throw new Error("Subtraction requires 2 arguments");
        Calculator.subtraction(argumentsArray[0],argumentsArray[1]);
        break;
    case "multiply":
        Calculator.multiply(argumentsArray);
        break;
    case "division":
        if(argumentsArray.length !== 2)
            throw new Error("Division requires 2 arguments");
        if(argumentsArray[1]===0)
            throw new Error("Divisor can't be 0");
        Calculator.division(argumentsArray[0],argumentsArray[1]);
        break;
}