import { expect } from '@jest/globals';
import characterLife from '../game';
/*
test.each([
        [{ name: 'Маг', health: 90 }, "healthy"],
        [{ name: 'НЕ Маг', health: 50 }, "wounded"],
        [{ name: 'не знаю кто', health: 10 }, "critical"],
    ])('characterLife'),
    (life, expectd) => {
        const rezult = characterLife(life);
        expect(rezult).toBe(expectd)
    }*/

test('rezult healthy', () => {
    const result = characterLife({ name: 'Маг', health: 90 });

    expect(result).toBe("healthy");
});

test('rezult wounded', () => {
    const result = characterLife({ name: 'Маг', health: 50 });

    expect(result).toBe("wounded");
});

test('rezult critical', () => {
    const result = characterLife({ name: 'Маг', health: 10 });

    expect(result).toBe("critical");
});