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
