function reverseNumber(num) {
    let reversedNum = 0;
    let originalNum = Math.abs(num);

    while (originalNum > 0) {
        let digit = originalNum % 10;
        
        reversedNum = reversedNum * 10 + digit;
        
        originalNum = Math.floor(originalNum / 10);
    }
    
    return num < 0 ? -reversedNum : reversedNum;
}

let number = 12345;
console.log(reverseNumber(number)); 

number = -6789;
console.log(reverseNumber(number)); 
