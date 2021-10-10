import { capitalize, reverseString, calculator, analyze, caesar } from './index'

// Capitalize 

test('capitalize the first letter of a string', () => {
    expect(capitalize("david")).toBe("David");
});

test('works with spaces', () => {
    expect(capitalize('the first letter of this sentence should be capitalized.')).toBe('The first letter of this sentence should be capitalized.')
});

// ReverseString

test('takes a string and returns it reversed', () => {
    expect(reverseString("mittens")).toBe("snettim");
});

test('works with long strings', () => {
    expect(reverseString("there is hope, but not for us")).toBe("su rof ton tub ,epoh si ereht");
});

test('reverse a string and make sure it works on palindromes', () => {
    expect(reverseString("level")).toBe("level");
});

// Calculator

test('addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
});

test('multiply', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
});

test('divide', () => {
    expect(calculator.divide(30, 5)).toBe(6);
});

// Analyze

test('analysis', () => {
    expect(analyze([0, 1, 2, 3, 4, 5])).toStrictEqual({average: 2.5, min: 0, max: 5, length: 6});
});

test('new analysis', () => {
    expect(analyze([7, 22, 13, 23, 4])).toStrictEqual({average: 13.8, min: 4, max: 23, length: 5});
});

test('odin analysis', () => {
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});

// Caesar

test('shift 1', () => {
    expect(caesar("mittens", 1)).toBe("njuufot")
});

test('shift 2', () => {
    expect(caesar("mittens", 2)).toBe("okvvgpu")
});

test('shift 7', () => {
    expect(caesar("mittens", 7)).toBe("tpaaluz")
});

test('shift 9', () => {
    expect(caesar("mittens", 9)).toBe("vrccnwb")
});


test('works with punctuation', () => {
    expect(caesar("jerry, hello.", 3)).toBe("mhuub, khoor.");
});

