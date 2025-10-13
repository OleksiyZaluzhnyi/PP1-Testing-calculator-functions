const subtract = require("../src/subtract");

test("Entering non-numeric variable must return an Error", () => {
    expect(subtract("number", 3)).toStrictEqual(Error("Error! both values must be number!"));
})

test("Entering number as a string must return an Error", () => {
    expect(subtract("5", 4)).toStrictEqual(Error("Error! number can't be string!"));
})
test("Subtract 0 and 0 must be 0", () => {
    expect(subtract(0, 0)).toBe(0);
});

test("Subtract 0 and -1 must be 1", () => {
    expect(subtract(0, -1)).toBe(1);
});

test("Subtract 0 and 1 must be -1", () => {
    expect(subtract(0, 1)).toBe(-1);
});