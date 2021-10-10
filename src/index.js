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

const caesar = (string, shift) => {
    let stringArray = string.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = alphabet.split("");
    let punctuation = ".,;()-";
    let punctArray = punctuation.split("");
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        
        if (stringArray[i] === " ") {
            newArray.push(" ");
        };
        
        for (let y = 0; y < punctArray.length; y++) {
            if (stringArray[i] === punctArray[y]) {
                newArray.push(punctArray[y]);
            };
        };

        for (let y = 0; y < alphabetArray.length; y++) {
            let position = y + shift
            
            if (alphabetArray[position] !== undefined) {
                if (stringArray[i] === alphabetArray[y]) {
                    newArray.push(alphabetArray[y + shift]);
                };
            };
        };
    };
    let newString = newArray.join("");
    return newString
}

export { capitalize, reverseString, calculator, analyze, caesar }