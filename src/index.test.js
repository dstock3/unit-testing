import { capitalize, reverseString, calculator, analyze } from './index'

test('capitalize the first letter of a string', () => {
    expect(capitalize("david")).toBe("David");
});

test('takes a string and returns it reversed', () => {
    expect(reverseString("mittens")).toBe("snettim");
});

test('reverse a string and make sure it works on palindromes', () => {
    expect(reverseString("level")).toBe("level");
});

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

test('analysis', () => {
    expect(analyze([0, 1, 2, 3, 4, 5])).toStrictEqual({average: 2.5, min: 0, max: 5, length: 6})
});

test('new analysis', () => {
    expect(analyze([7, 22, 13, 23, 4])).toStrictEqual({average: 13.8, min: 4, max: 23, length: 5})
});

test('odin analysis', () => {
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
});