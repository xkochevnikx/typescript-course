//дженерик это динамический тип который задается в момент передачи чего либо и по факту можно сказать что изначально это any
//дженерик это возможность типы как параметры и возможность их динамически назначать как праило это однобуквенные значения их колличество не ограничено. Входной параметр этих динамических типов можно сужать ключенвым словом extends до какиго то конкретного значения например объект или юнион или любой другой тип.

function head<T>(value: T[]): T;
function head(value: any): any {
    return value[0];
}
head([2]);
const head1 = <T>(value: T[]): T => value[0];

interface IModalDate<T> {
    title: string;
    value: T;
}
const obj: IModalDate<number> = {
    title: 'qwer',
    value: 1,
};

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

function toArray<T>(...arr: T[]): T[] {
    return arr;
}

toArray(1, 2, 3);
toArray('', '');
export {};
