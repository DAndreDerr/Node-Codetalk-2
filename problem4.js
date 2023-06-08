// Using only the filter method on the numbers array, create a function that 
// returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51, 6];

const newNumbers = numbers.filter(divisibleCheck)

function divisibleCheck(y){
    return y % 3 === 0 && y % 6 === 0 && y % 9 != 0
}



console.log(newNumbers);