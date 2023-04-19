const zeros = num => {
        if (num === 0) {

                return 0;
        }
        let hold =[];
        for (let i = 1; i <= num; i++) {
            hold.push(i);
        }
        // console.log(hold);
        const factorial = hold.reduce((acc, curr) => acc * curr);
        console.log(factorial);
        // return factorial;

        let result = 0;
        for (let i = 5; i <= num; i += 5) {
                let x = i;
                while (x % 5 === 0) {
                        x /= 5;
                        result++;
                }
        }
        console.log(result)
        return result;
}


zeros(0)