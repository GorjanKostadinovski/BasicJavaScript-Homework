let arrOne = [1,2,3,4,5,1,4,1]
let arrTwo = [3,7,7,5,7,9,1,6,9,4,3]
let arrThree = [4,1,3,6,7,8,9,4,5,6,3,2,6]

function findNumber(array,num){
    let n = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == num){n++}
    }
    return n;
}
console.log(`There are ${findNumber(arrOne,1)} occurrences of number 1 in the array`)
console.log(`There are ${findNumber(arrTwo,7)} occurrences of number 7 in the array`)
console.log(`There are ${findNumber(arrThree,3)} occurrences of number 3 in the array`)
