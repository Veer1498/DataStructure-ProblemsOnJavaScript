/**
 * 4.Take a range from 0 – 100, 
 * find the digits that are repeated twice like 33, 77, etc 
 * and store them in an array
 */
let num = 1
let elements = []
while( num <101){
    if(num % 11 == 0)
   elements.push(num)
    num++
}


//let rep = elements.filter((number) => number%11)
//console.log(rep)