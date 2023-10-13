// опреатор keyof возвращает некий юнион из ключей объектов он может помочь в создании дженериков и сужении их допустимых значений

type WindowProp = keyof Window;

const myWindow: WindowProp = 'alert';

interface IPC {
    brand: string;
    year: number;
}

type Type1 = keyof IPC; //  в качестве значений тип получит юнион из ключей интерфейса

const TypeVar: Type1 = 'brand';

type Tupple1 = keyof [string, number];

const TypeVar2: Tupple1 = 'push';
