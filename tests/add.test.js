const add = require("../src/add");

test("Entering non-numeric variable must return an Error", () => {
    expect(add("number", 3)).toStrictEqual(Error("Error! both values must be number!"));
})

test("Entering number as a string must return an Error", () => {
    expect(add("5", 4)).toStrictEqual(Error("Error! number can't be string!"));
})
test("Add 0 and 0 must be 0", () => {
    expect(add(0, 0)).toBe(0);
});

test("Add 0 and -1 must be -1", () => {
    expect(add(0, -1)).toBe(-1);
});

test("Add 0 and 1 must be 1", () => {
    expect(add(0, 1)).toBe(1);
});

