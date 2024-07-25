function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

let number = 4;
console.log(checkOddOrEven(number)); 

number = 7;
console.log(checkOddOrEven(number)); 
