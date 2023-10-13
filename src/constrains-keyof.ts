//предпологается что по ключу вернется какое то значение из объекта. Предпологается что структура объекта динамическая и заранее не известна, что бы не обратится к несуществующему ключу надо поступить следующим образом - значение второго принимаемого параметра нужно сократить до ключей передаваемого объекта то есть U это юнион из ключей объекта и если вдруг этого ключа не существует typescript не даст его передать в функцию

function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
    return obj[key];
}

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

prop('a', obj1);

//error
prop('d', obj1);

export function keys<T extends object>(obj: T): Array<keyof T> {
    const currentKeys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }

    return currentKeys;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
    const currentValues = [];

    for (let key in obj) {
        currentValues.push(obj[key]);
    }

    return currentValues;
}
