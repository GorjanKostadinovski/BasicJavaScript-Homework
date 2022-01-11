alert("Input end to finish array")
let a = []
let input =""
input = prompt("Enter word")
while (input != "end"){
    a.push(input)
    input = prompt("Enter word")
}

function stringArray(array){
    let b = array.join(" ")
    document.write(b)
}
stringArray(a)
