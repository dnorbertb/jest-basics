import { objectFunc } from "../utils/object";

describe('Object tests', () => {

    it('Compares returned object', () => {
        expect(objectFunc()).toEqual({ success: true });
    });

    /**
     * Test belov will fail because in js {} === {} => false
     *  it('Compares returned object', () => {
     *   expect(objectFunc()).toEqual({ success: true });
     *  });
     * 
     *  We need to use toEqual to check if objects looks the same.
     */
});