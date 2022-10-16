const sum = require('./sum');

describe('addition calculator tests', () => {
    
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });

    test('no arguments to equal 0', () => {
        expect(sum()).toBe(0);
    });

    test('adds 1 + 2 + 3 + 4 to equal 10', () => {
        expect(sum(1,2,3,4)).toBe(10);
    });
});

