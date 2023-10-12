//перегрузка - сначала идет перечисление возможных вариантов затем основная функция
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

//error
add(1, '');

type asyncSb = (res: number) => number;

function asyncSBFn(a: number, b: number): Promise<number>;
function asyncSBFn(a: number, b: number, c: asyncSb): number;
function asyncSBFn(a: number, b: number, c?: asyncSb): any {
    const res = a + b;
    if (c) {
        return c(res);
    }
    return Promise.resolve(res);
}

asyncSBFn(1, 2);

function head(value: number[]): number;
function head(value: string): string;
function head(value: any): any {
    return value[0];
}

head([2]);
