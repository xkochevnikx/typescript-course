//для типов ts так же доступно замыкание

export function tuplePairCreator<T>(first: T) {
    return function <U>(second: U): [T, U] {
        return [first, second];
    };
}

const fn = tuplePairCreator(1);

const fn2 = fn(2);
