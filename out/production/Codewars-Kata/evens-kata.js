// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
//
//     Only numbers without decimals like 4 or 4.0 can be even.
//
//     The input is a sequence of numbers: integers and/or floats.
//



    function sumEvenNumbers(input) {
    let evens = input.filter(number => number % 2 === 0)
    return evens.reduce(
        (accumulator, value) => accumulator + value, 0
    )}


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))