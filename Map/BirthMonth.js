/**
 Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print.
 */

let map = new Map()
let person = 1
while(person <= 50){
    let month = Math.floor(Math.random()*12)+1;
    // console.log(month)
    map.set(person,month);
    person++
}
let months = 1;
while(months <= 12){
    let sameMonth = [...map.entries()].filter(([a,b]) => b == months).map(([c,d]) => c);
    console.table(months)
    console.log(sameMonth)
    months++
}