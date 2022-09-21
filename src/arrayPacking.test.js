const solution = require('./arrayPacking.js');

test('test 1', () => {
    expect(solution([24, 85, 0])).toBe(21784);
});

test('test 2', () => {
    expect(solution([23, 45, 39])).toBe(2567447);
});

test('test 3', () => {
    expect(solution([1, 2, 4, 8])).toBe(134480385);
});

test('test 4', () => {
    expect(solution([5])).toBe(5);
});

test('test 5', () => {
    expect(solution([187, 99, 42, 43])).toBe(724198331);
});
