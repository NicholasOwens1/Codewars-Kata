//  TODO: This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
//   Add the value "codewars" to the array websites 1,000 times.

let websites = [];
const add1k = arr => {
    while(arr.length < 1000) {
        arr.push('codewars');
    }
    return arr.length;
}

add1k(websites);


//Create an empty array. Create a while loop that adds 'codewars' to the array until its length is 1k. Return thr new array.
//