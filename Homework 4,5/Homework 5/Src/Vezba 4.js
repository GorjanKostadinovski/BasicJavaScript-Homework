


function findNumbers(array,type) {
    if (type.toLowerCase() == "even") {
        for(let i = 0 ; i < array.length ; i++) {
            if (array[i] % 2 === 0) {
                console.log(`this number is even: ${array[i]} `);
            }
        }
    }
    else if(type.toLowerCase() == "odd"){

        for(let i = 0 ; i < array.length ; i++) {
            if (array[i] % 2 === 1) {
                console.log(`this number is odd: ${array[i]} `);
            }
        }
    }
    else{
        alert(`${type} is an incorrect type`)
    }
}
findNumbers([1,2,3,4,5,6,],'even');
