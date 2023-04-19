function betweenExtremes(numbers) {
    let xl = Math.max(...numbers);
    let sm = Math.min(...numbers)
    return xl - sm
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))