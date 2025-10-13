function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return new Error("Error! both values must be number!")
    }
    else if (typeof a === "string" || typeof b === "string") {return new Error("Error! number can't be string!")}
    else if(a === 0 || b === 0) {return 0;}
    return a * b;
}

module.exports = multiply;