const numbers = [1, 2, 3, 4, 5];

const str: string[] = [];

const str2: Array<string> = [];

str.push('');

interface Icar {
    wheels: number;
    brand: string;
}

const cars: Icar[] = [];

cars.push({ brand: 'qw', wheels: 2, type: '' });

const arrOfArr: string[][] = [];
arrOfArr.push([]);

function printArr(arr: unknown[]): void {
    arr.push('');
}
export {};
