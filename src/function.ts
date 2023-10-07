//тип возвращаемого значения не обязательный

function sum(a: number, b: number) {
    return a + b;
}
//error
// sum(2, "");

// ничего не возвращает но можно не указывать при этом функция звершиться, вопросительный знак символ необязательности. дефолтное значение можно присвоить в параметрах или в теле выражения "или" оно вернет или переданное или дефолтное
function log(name: string, userId?: number): void {
    console.log(name, `id ${userId || 1}`);
}

// в случае с этим функция не завешится
function crash(): never {
    throw new Error('crash');
}

//
function avarage(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0);

    return sum / nums.length;
}
