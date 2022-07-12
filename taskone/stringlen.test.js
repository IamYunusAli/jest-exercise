const stringlen = require('./stringlen')

test('the name shoudl be 5 char long', () => {
    expect(stringlen('Yunus')).toBe(5);
})

test('input cant be less than 1', () => {
    expect(() => {stringlen('')}).toThrow();
})

test('input cant be greater than 10', () => {
    expect(() => {stringlen('yunusalihassen')}).toThrow();
})