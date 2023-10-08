type Status = 'ok' | 'loading' | 'error';

const s: Status = 'loading';

//сужение типов
function printId(id: number | string): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

function welocome(person: [string, string] | string): void {
    if (Array.isArray(person)) {
        console.log(person.join(' '));
    } else {
        console.log(person);
    }
}

const arr: (number | string)[] = [];
