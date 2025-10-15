const divide = require("../src/divide");

test("Entering valid non-zero values should return correct result", () => {
    expect(divide(5, 4)).toBeCloseTo(1.25);
    expect(divide(5, 3)).toBeCloseTo(1.67);
    expect(divide(12, 3)).toBe(4);
    expect(divide(1, 1)).toBe(1);
    expect(divide(1, -1)).toBe(-1);
    expect(divide(-1, -1)).toBe(1);
})

test("Entering non-numeric value must return an Error", () => {
    expect(divide("number", 3)).toStrictEqual(Error("Error! both values must be number!"));
});

test("Entering number as a string must return an Error", () => {
    expect(divide("5", 4)).toStrictEqual(Error("Error! number can't be string!"));
});

test("Entering 0 as second argument must return an Error", () => {
    expect(divide(5, 0)).toStrictEqual(Error("Error! divider can't be zero!"));
});

test("Entering 0 as first argument and any possible value as second argument must return 0", () => {
    expect(divide(0, 4)).toBe(0);
    expect(divide(0, 0)).toBe(0);
    expect(divide(0, 1)).toBe(0);
    expect(divide(0, -1)).toBe(0);
});




