let a = [prompt("Input name"),prompt("Input mood"),prompt("input activity")]

function tellStory(name,mood,activity){
    console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`)
}

tellStory(a[0],a[1],a[2])