//при передачи в параметры объекта в нем указываеютя обязательные поля но кроме этих полей в передаваемом в аргументы объекте могут быть еще значения и это не вызывет ошибки такой нюанс
let obj = { x: 'w', y: 'q', c: 'f' };

function printPoint(point: { x: string; y: string }): void {
    console.log(`${point.x} ${point.y}`);
}
printPoint(obj);

function printName(user: { firstName?: string; lastName: string }): void {
    if (user.firstName) console.log(user.firstName.toUpperCase());
}

printName({ lastName: 'deev' });
