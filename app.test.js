const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require("./app");

test("Returns the first character capitalized.", () => {
    expect(capitalize("tamal")).toBe("T");
});

test("takes a string and returns it reversed", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("add two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("subtract two numbers", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test("divide two numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test("multiply two numbers", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesarCipher: TEST 1", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher: TEST 2", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesarCipher: TEST 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Takes an array of numbers and returns an object with properties: average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
