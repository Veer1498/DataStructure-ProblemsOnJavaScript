/**
 * 3.Extend the Prime Factorization Program
 *  to store all the Prime Factors of a number n
 *  into an array and finally display the output.
 */

const prompt = require('prompt-sync')();
let primeArray = []
//Function to check Prime Factors
function primeCheck(n){
    if(n == 1){
        console.log("Only Factor is 1 !!")
        return
    }
    for(let i = 2;i <n/2 ;i++){
        if(n % i == 0){
            //Adding Elements into array
            primeArray.push(i)
        }
    }
}
let number = parseInt(prompt("Enter Any Number : "))
primeCheck(number)
console.log(primeArray)

