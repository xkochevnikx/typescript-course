//сужение типов

function exampl(x: string | number) {
    if (typeof x === 'string') {
        x.toLowerCase();
    } else if (typeof x === 'number') {
        x.toFixed();
    } else if (x === undefined) {
        console.log('no value');
    }
}

//посколку null тоже объект как и массив для проверки на массив делает такую проверку
function example(x: string | string[] | null) {
    // if(typeof x === "object") {}
    // if (x && typeof x === 'object') {
    //     x.map(() => {});
    //

    if (typeof x === 'string') {
        x.toLowerCase();
    } else if (Array.isArray(x)) {
        x.filter(() => {});
    }
}

//пример проверки на инстансе объекта даты
function exmple1(x: number[] | Date) {
    if (x instanceof Date) {
        x.getHours();
    } else {
        x.map(() => {});
    }
}

//
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim();
    }

    return animal.fly();
}
export {};
