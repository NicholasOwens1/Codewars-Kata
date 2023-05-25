function createPhoneNumber(numbers){
//   loop through the array, put parenthesis around the first three numbers,
//     put a space between the third and fourth numbers,
//     put a dash between the sixth and seventh numbers,
//     return the string
    let num = numbers.join('');
    return `(${num.substring(0,3)}) ${num.substring(3,6)}-${num.substring(6)}`
}