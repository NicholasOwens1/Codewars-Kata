function contamination(text, char){
    let newStr = text.split("")
    if (text === "" || char === "") {
        return ""
    } else {
        let str = newStr.map(letter => letter = char);
        return str.join("")
    }
}

console.log(contamination("heehee", "x"))

// console.log(contamination("heeheee", "y"))

// let text = "hoe"
// let newStr = text.split("")
// console.log(newStr)
// let str = newStr.map(letter => letter = "x")
// console.log(str.join(""))

//turn into array, convert every character with.map, join