//интерфейсы можно создавать в рамках одной области видимости с одикоковыми именами таким образов они просто склеиваются расширяя друг

interface IUser {
    //такой параметр записывается еденожды и больше не изменяется
    readonly email: string;
    readonly login: string;
    password: string;
}

interface IUser {
    isOnline?: boolean;
}

const user: IUser = {
    email: 'c',
    login: 'fd',
    password: '123',
};

//так например можно расширить тип любого объекта в том числе глобального и добавить в него дополнительное поле.

interface Window {
    isAuth?: boolean;
}
//назначаю новое свойтсво флаг для каких то своих целей
window.isAuth = true;

interface Person {
    readonly firstName: string;
    readonly lastName: string;
    phone?: string;
    yearOfBirth: number;
}

//можно наследовать поля нескольких разных интерфейсов
interface Employee extends IUser, Person {
    contractStart: Date;
}

// const user1: Employee = {

// };
export {};
