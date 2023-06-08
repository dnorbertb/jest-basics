import { sum } from "../utils/basic"

describe('Sum function tests', () => {
    it('Checks if returns right value', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('Checks if wrong value is not returned using .not. modifier', () => {
        expect(sum(1, 2)).not.toBe(4);
    });
});