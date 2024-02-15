const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
    });

test('2000 + 8001 is equal to 10001', () => {
    expect(add(2000,8001)).toBe(10001);
    });

test('69 + 420 is equal to 489', () => {
    expect(add(69,420)).toBe(489);
    });