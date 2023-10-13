//для типов ts так же доступно замыкание

export function tuplePairCreator<T>(first: T) {
    return function <U>(second: U): [T, U] {
        return [first, second];
    };
}

const fn = tuplePairCreator(1);

const fn2 = fn(2);

export function createMap<T>(list: T[]) {
    return function <U>(cb: (x: T) => U): U[] {
        const result = [];

        for (let el of list) {
            result.push(cb(el));
        }

        return result;
    };
}
const mapNums = createMap([1, 2, 3]);

const result = mapNums((num) => num + 1);
