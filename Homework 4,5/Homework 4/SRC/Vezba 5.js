let arr =  [3, 6, 2, 56,'eden','dva','tri' ,32, 5, 89, 1,32];
let largest = arr[0];
let smallest = arr[0]
function sumOfMinMax(niza) {
    

for (var i = 0; i < niza.length; i++) {
    if (largest < niza[i] ) {
        largest = niza[i];
    }
    else if (smallest > niza[i]) {
        smallest = niza[i]
    }
}
console.log(`min ${smallest} `)
console.log(`max ${largest} `);

let sum = largest + smallest
console.log(`sumata e : ${sum}`)
}

sumOfMinMax(arr)
