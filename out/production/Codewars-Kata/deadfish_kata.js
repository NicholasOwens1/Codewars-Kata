

/* TODO Write a simple parser that will parse and run Deadfish. Deadfish has 4 commands,
    each 1 character long: i increments the value (initially 0)d decrements the value
    s squares the value
    d decrements the value
    s squares the value
    i increments the value (initially 0)
    o outputs the value into the return array
    Invalid characters should be ignored.
    parse("iiisdoso") => [ 8, 64 ]
*/

// Solved using forEach.
const parse = string => {
    let inputs = string.split("");
    let start = 0;
    let arr = [];


     inputs.forEach(input => {
        if (input === "i" ) {
            start += 1;
            // console.log(start)
        } else if (input === "d") {
            start -= 1;
            // console.log(start)
        } else if (input === "s") {
            start **= 2;
            // console.log(start)
        } else if (input === "o") {
            arr.push(start);
        } return input ;
        });
    return arr;
}



//Solved using .reduce
const parse = string => {
    let arr = [];

    string.split('').reduce((acc, ind) => {
        if (ind === 'i') acc++;
        if (ind === 'd') acc--;
        if (ind === 's') acc**=2;
        if (ind === 'o') arr.push(acc);
        return acc;
    }, 0);
}

// Split up the string into an array, loop over the inputs, perform the respective command for every input. The input
// starts at 0
// i increments
//d decremeents
//s squares it
//o outputs into an array
//ignore other characters.
