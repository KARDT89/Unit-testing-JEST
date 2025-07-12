export function capitalize(str) {
    return str[0].toUpperCase();
}

export function reverseString(str) {
    if (str.length === 0) return "";
    return reverseString(str.slice(1, str.length)) + str[0];
}

export const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    multiply(x, y) {
        return x * y;
    },
};

export function caesarCipher(str, shift) {
    const lowercaseArr = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(97 + i)
    );
    let shiftedArr = lowercaseArr
        .slice(shift)
        .concat(lowercaseArr.slice(0, shift));
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let index;
        if (lowercaseArr.indexOf(str[i].toLowerCase()) === -1) {
            result += str[i];
        } else if (str[i] === str[i].toUpperCase()) {
            index = lowercaseArr.indexOf(str[i].toLowerCase());
            result += shiftedArr[index].toUpperCase();
        } else {
            index = lowercaseArr.indexOf(str[i]);
            result += shiftedArr[index];
        }
    }
    return result;
}

export function analyzeArray(arr) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let val of arr) {
        sum += val;
        min = Math.min(min, val);
        max = Math.max(max, val);
    }
    return {
        average: sum / arr.length,
        min: min,
        max: max,
        length: arr.length,
    };
}
