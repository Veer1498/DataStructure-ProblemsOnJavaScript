/** 1.Write a program in the following steps
    a. Generates 10 Random 3 Digit number.
    b. Store this random numbers into a array.
    c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
 */

let array = []
for(let i = 0; i<10; i++){
    // random Numbers Generated
    let random = Math.floor(Math.random()*(999-100))+100
    //Adding all random Numbers into Array by push
    array.push(random)
}
console.log(array)
function secondMax (arr,arraysize){
    //finding largest first
    let secondLarge =" ", largest = 0
    for(let i=0;i<arraysize;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    //finding 2nd largest
    for(let i = 0;i<arraysize;i++){
        if(arr[i]<largest && arr[i]>secondLarge)
        secondLarge = arr[i]
    }
    //Printing 2nd Largest Number
    console.log("Second Largest Number is : ",secondLarge)
} 
secondMax(array,array.length)
console.log("===================================================================")
/**
 * 2.Extend the above program to sort the array and then 
 * find the 2nd largestand the 2nd smallest element.
 **/

console.log("After Sorting : ",array.sort())
let small2 = array[1]
let large2 = array[array.length-2]

console.log("The Highest Second Number : ",large2,"\nThe lowest Second Number : ",small2)
console.log("===================================================================")


