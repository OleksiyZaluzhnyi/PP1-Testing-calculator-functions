const multiply = require("../src/multiply")

test("Entering non-numeric value must return an Error", () => {
    expect(multiply("number", 3)).toStrictEqual(Error("Error! both values must be number!"));
});

test("Entering number as a string must return an Error", () => {
    expect(multiply("5", 4)).toStrictEqual(Error("Error! number can't be string!"));
});

test("Entering 0 as first argument must return 0", () => {
    expect(multiply(0, 5)).toBe(0);
});

test("Entering 0 as second argument must return 0", () => {
    expect(multiply(5, 0)).toBe(0);
});

test("Entering 0 as both arguments must return 0", () => {
    expect(multiply(0, 0)).toBe(0);
});

test("Multiply 1 and 1 must be 1", () => {
    expect(multiply(1, 1)).toBe(1);
});

test("Multiply 1 and -1 must be -1", () => {
    expect(multiply(1, -1)).toBe(-1);
});

test("Multiply -1 and -1 must be 1", () => {
    expect(multiply(-1, -1)).toBe(1);
});


