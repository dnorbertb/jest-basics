export const fetchFunction = async (id: number) => {
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const json = await req.json();
    return json;
}

export const promiseResolveFunc = (value: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100);
    });
}

export const promiseRejectFunc = (value: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 100);
    });
}