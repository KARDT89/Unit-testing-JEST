import {
    capitalize,
    calculator,
    caesarCipher,
    analyzeArray,
    reverseString,
} from "./app.js";

test("Returns the first character capitalized.", () => {
    expect(capitalize("tamal")).toBe("T");
});

test("Takes a string and returns it reversed", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("Calculator", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesarCipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Analyse Array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
