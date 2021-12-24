//Vezba 1

function parameters(a) {
    console.log(typeof(a))
}

parameters(5)
parameters("String")
parameters(true)
parameters()
parameters(null)

//Vezba 2
let choice = prompt("Vnesi 1 za covescki go dini vo kuceski godini ili vnesi 2 za kuceski godini vo covecki godini")

if (choice == 1) {
    

        
       

function years(humanYears,) {
    let dogYears =humanYears * 7

    return dogYears
}

let res = years(prompt("vnesi godini"))
console.log(`Your dog's age is ${res} years. ${res} is the calculated age`)
}
else if (choice == 2) {
    

function godini(dog) {
    let human =dog / 7
    return human
}

let result =parseInt( godini(prompt("vnesi godini")))
console.log(result + " Godini")
 
 
}
else{
    alert("Wrong input")
}
 //Vezba 3

 function team(girls, boys) {
     if (girls < 10 && boys < 10) {
        console.log(`0${girls} girls 0${boys} boys`)
     }
     else{
     console.log(`${girls} girls ${boys} boys`)
     }
 }

 team(prompt("Input number od girls"),prompt("input number of boys"))

 //Vezba 4
function age(birthYear,currentYear = new Date().getFullYear()) {
    let calculateAge = currentYear - birthYear
    return calculateAge
}

let currentAge = age(prompt("Input Date Of Birth"))
console.log(currentAge)


