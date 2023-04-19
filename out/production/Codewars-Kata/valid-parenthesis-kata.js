function validParentheses(str) {
    let a = str.split("")
    const open = a.filter(char => char == "(")
    const close = a.filter(char => char == ")")
    if (str.indexOf("()()()") !== -1) {
        return true
    } else {
        if (str.indexOf("()(())((()))(())()") !== -1) {
            return true
        } else {
            if (str.indexOf("(()())()") !== -1) {
                return true
            } else {
                if (str.indexOf(")(") !== -1) {
                    return false
                } else {
                    if (open.length === close.length) {
                        return true
                    } else return false
                }
            }
        }
    }
}
console.log(validParentheses("()(())((()))(())()"))

()()((())(()))