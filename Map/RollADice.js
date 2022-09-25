/**
1. Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
   minimum times
 */
let map = new Map();
let check = true
while(check){
    let rollDice = Math.floor(Math.random()*(6-1)+1)
    // console.log(rollDice)
    if(map.has(rollDice)){
        let count = map.get(rollDice)
        count++
        map.set(rollDice,count)
    }
    else{
        map.set(rollDice,1)
    }
    for(let key of map.keys()){
        if(map.get(key) == 10){
            check = false;        
        }
    }
}
console.table(map)
let maxNum
for(let [key,value] of map){
    if(value == 10){
        maxNum = key
    }
}
console.log("Max Repeated Number is : ",maxNum)
