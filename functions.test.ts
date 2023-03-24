const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    test('contains the same items', () => {
        expect(shuffleArray([1, 2, 3, 4])).toContain(2)
    }),
        test('return an array', () => {
            expect(shuffleArray([])).toEqual([])
        })
})