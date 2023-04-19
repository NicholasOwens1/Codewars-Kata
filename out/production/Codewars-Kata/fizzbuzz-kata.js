// Return an array containing the numbers from 1 to N, where N is the parametered value.
//
//     Replace certain values however if any of the following conditions are met:
//
//     If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
//
// Method calling example:

    // fizzbuzz(3) -->  [1, 2, "Fizz"]
const fizzBuzz = num => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
       arr.push(i);
    }

    const newArr = arr.map(x => {
        if(x % 15 === 0) {
           return "FizzBuzz";
        } else if (x % 5 === 0) {
            return "Buzz";
        } else if (x % 3 === 0) {
            return "Fizz";
        }
        return x;

    })
return newArr
};
console.log(fizzBuzz(10))
