function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}


function isValidIP(str) {
    let separate = str.split(".");
    // console.log(separate.length)
    // if the IP has 4 values go into forEach loop
    if (separate.length === 4) {
        // console.log(separate)
    separate.forEach((value) => {
        let num = parseFloat(value)
        console.log(num)
        //if the IP values are 3 digits long and are numbers and numbers and have no leading zeroes return true
        if (value.length === 3 && isNumericAndNotNaN(num) && parseFloat(value[0]) !== 0 && value >= 0 && value <= 255 && value[1] !== 0) {
           return true
        } else {
            return false
        }})
    }
}


   isValidIP("111.111.322.222");