import { delay } from "../utils/delay";

jest.useFakeTimers();

describe('Delay tests', () => {
    it('Tests timeout function using fake timers', async () => {
        const fn = jest.fn(); // Creates jest mock function
        delay(200, fn);  // Runs function we want to test
        jest.advanceTimersByTime(200); // It sets fake clocks to 200 ms ahead
        expect(fn).toHaveBeenCalled(); // Checks if mock function is called
    });
});

