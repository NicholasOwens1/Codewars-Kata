function contamination(text, char){
    let newStr = text.split("")
    if (text === "" || char === "") {
        return ""
    } else {
        let str = newStr.map(letter => letter = char);
        return str.join("")
    }
}

