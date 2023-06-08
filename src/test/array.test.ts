let testArray = ['item'];

beforeEach(() => {
    testArray = ['item']
});

afterEach(() => {
    console.log(testArray)
});

// beforeAll
// afterAll


describe('Array tests', () => {
    it('Checks if item gets added to array', () => {
        testArray.push('item2');
        expect(testArray).toContain('item2');
    });

    it('Checks if item gets removed from array', () => {
        const testLength = testArray.length;
        testArray.pop();
        expect(testArray.length).toBe(testLength - 1)
    });
})