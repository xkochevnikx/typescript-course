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
const user = {
    login: 'svyat',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(2000, 1, 1),
};
const admin = {
    login: 'svyat',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(2000, 1, 1),
    role: 'admin',
};
//минимальный набор обязательных параметров пишу параметрах
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`hello ${user.login}`);
    }
}
login(user);
