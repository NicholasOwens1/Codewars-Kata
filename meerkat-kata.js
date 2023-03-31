let meer = ["tail", "body", "head"];
// let pop = meer.pop
// console.log(meer.pop());
function fixTheMeerkat(arr) {
    [arr[0], arr[2]] = [arr[2], arr[0]];
    return arr
}
//
console.log(fixTheMeerkat(["tail", "body", "head"]
))