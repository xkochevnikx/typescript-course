"use strict";
//при передачи в параметры объекта в нем указываеютя обязательные поля но кроме этих полей в передаваемом в аргументы объекте могут быть еще значения и это не вызывет ошибки такой нюанс
let obj = { x: 'w', y: 'q', c: 'f' };
function printPoint(point) {
    console.log(`${point.x} ${point.y}`);
}
printPoint(obj);
function printName(user) {
    if (user.firstName)
        console.log(user.firstName.toUpperCase());
}
printName({ lastName: 'deev' });
