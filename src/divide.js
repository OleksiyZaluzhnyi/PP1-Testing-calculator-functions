function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return new Error("Error! both values must be number!")
    }
    else if (typeof a === "string" || typeof b === "string") {return new Error("Error! number can't be string!")}
    else if(a === 0) {return 0;}
    else if(b === 0) { return new Error("Error! divider can't be zero!");}
    return a / b
}

module.exports = divide;