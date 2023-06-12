import { fetchFunction, promiseResolveFunc, promiseRejectFunc } from "../utils/promise"

describe('Promises tests', () => {
    it('Checks if right data is returned from promise', async () => {
        const toDoId = 1;
        jest.spyOn(global, 'fetch').mockReturnValue(fetchMockFunction);
        const result = await fetchFunction(toDoId);
        expect(result.id).toEqual(toDoId);
    });

    it('Checks if promise resolves with right value', async () => {
        expect(promiseResolveFunc('Done!')).resolves.toBe('Done!');
    });

    it('Checks if promise rejected with right value', () => {
        expect(promiseRejectFunc('Rejected!')).rejects.toBe('Rejected!');
    });
});


const fetchMockFunction = Promise.resolve({
    ok: true,
    status: 200,
    json: async () => ({ id: 1, data: "I'm mocked data" }),
} as Response);