export const delay = (ms: number, fn: () => unknown) => {
    setTimeout(() => {
        fn();
    }, ms);
};