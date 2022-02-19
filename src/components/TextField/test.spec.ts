import { sum } from './test'

describe('Sum function', () => {
    it('Should return 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    })
})