//Vezba 1

var ime = prompt("Vnesi ime")
var prezime = prompt("Vnesi prezime")
console.log(`Hello, I am ${ime} ${prezime}`)

//Vezba 2

var godina = parseInt(prompt("Vnesi godina na ragjanje"))
var zodiac = (godina - 4) %12


switch (zodiac) {
    case 0:
        console.log("Your Chinese zodiac is Rat")
        break;
    case 1:
        console.log("Your Chinese zodiac is Ox")
        break;
    case 2:
        console.log("Your Chinese zodiac is Tiger")
        break    
    case 3:
        console.log("Your Chinese zodiac is Rabbit") 
        break    
    case 4:
        console.log("Your Chinese zodiac is Dragon")
        break 
    case 5:
        console.log("Your Chinese zodiac is Snake") 
        break
    case 6:
        console.log("Your Chinese zodiac is Horse") 
        break
    case 7:
        console.log("Your Chinese zodiac is Goat") 
        break
    case 8:
        console.log("Your Chinese zodiac is Monkey")
        break
    case 9:
        console.log("Your Chinese zodiac is Rooster")
        break
    case 10:
        console.log("Your Chinese zodiac is Dog")    
        break;
    case 11:
        console.log("Your Chinese zodiac is Pig")    
        break;

    default: alert("Invalid input")
        break;
}