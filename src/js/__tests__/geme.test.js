import { expect } from '@jest/globals';
import characterLife from '../game';


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