function capitalize(string) {
    let firstLetter = string.charAt(0);
    let newString = firstLetter.toUpperCase() + string.slice(1);
    return newString
}

function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    var newString = reverseArray.join(""); 

    return newString
}

const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}

const analyze = (newArray) => {
    const average = newArray.reduce((a, b) => a + b) / newArray.length;
    const min = Math.min(...newArray);
    const max = Math.max(...newArray);
    const length = newArray.length;

    const newObj = (average, min, max, length) => {
        return { average, min, max, length }
    }

    return newObj(average, min, max, length)
}

export { capitalize, reverseString, calculator, analyze }