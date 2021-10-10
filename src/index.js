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
    let punctuation = ".,;()-—'’";
    let punctArray = punctuation.split("");
    let newArray = [];
    
    function pushLetter(letter, newAlphabet, position, index, capitalized) {
        let alphabetArray = newAlphabet.split("");
    
        if (letter === alphabetArray[index]) {
            if (capitalized) {
                let capitalizedLetter = alphabetArray[position].toUpperCase();
                newArray.push(capitalizedLetter);
            } else {
                newArray.push(alphabetArray[position]);
            };
        };  
    };

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
            let letter = stringArray[i]
            let isCapitalized = false;

            if (letter === stringArray[i].toUpperCase()) {
                letter = stringArray[i].toLowerCase();
                isCapitalized = true
            }
            
            if (alphabetArray[position] !== undefined) {
                if (letter === alphabetArray[y]) {
                    if (isCapitalized) {
                        let capitalizedLetter = alphabetArray[position].toUpperCase();
                        newArray.push(capitalizedLetter);
                    } else {
                        newArray.push(alphabetArray[position]);
                    };
                };
            } else {
                let difference = shift - 26;
                if (difference > 0) {
                    let scope = difference / 26;
                    let newAlphabet = alphabet.repeat(scope) ;
                    pushLetter(letter, newAlphabet, position, y, isCapitalized);
                } else {
                    let newAlphabet = alphabet + alphabet;
                    pushLetter(letter, newAlphabet, position, y, isCapitalized);
                };
            };
        };
    };
    let newString = newArray.join("");
    return newString
}

export { capitalize, reverseString, calculator, analyze, caesar }