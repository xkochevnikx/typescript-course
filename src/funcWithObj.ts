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

interface IUser {
    login: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}

interface IAdmin {
    login: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

const user: IUser = {
    login: 'svyat',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(2000, 1, 1),
};

const admin: IAdmin = {
    login: 'svyat',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(2000, 1, 1),
    role: 'admin',
};

//минимальный набор обязательных параметров пишу параметрах
function login(user: { login: string; password: string }) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`hello ${user.login}`);
    }
}

login(user);
