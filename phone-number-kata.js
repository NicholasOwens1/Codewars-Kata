function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}



function isItANum(str) {
    let sep = str.replace(/\D/g, "")
    if (sep.length === 11 && sep.split('')[0] == 0) {
        return sep
    } else return "Not a phone number"
}

console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"))