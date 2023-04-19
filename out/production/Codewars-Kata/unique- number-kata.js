// TODO There is an array with some numbers. All numbers are equal except for one. Try to find it! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// TODO findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// TODO It’s guaranteed that array contains at least 3 numbers.
// TODO The tests contain some very huge arrays, so think about performance.

const findUniq = arr => {
    const unique = arr.filter((elem, ind, arr) => {
        if (elem !== arr[ind + 1]) {
            return elem;
        }
    }, 0)
    if (unique.length === 3) {
        return unique[1];
    } else if (unique.length === 1) {
        return unique[0];
    } else if (unique.length === 2) {
        if (unique[1] === arr[1]) {
            return unique[0];
        } else return unique[1];
    }
}

// Loop through the array. Is the next array value equal to the current one? If yes, return an empty array for this
// iteration. I yes return the current value. If the array length is one, return the value, if it's 2, return the one
// that isn't like the others in the original array, if it's 3, return the middle value.


