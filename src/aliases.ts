type MyBoolean = false | true;

type Pair = [string, string];

type Pairs = Pair[];

type DiffCar = {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    [key: string]: unknown | string;
};

// при таком слиянии в итоговый алиас попадает и общие значнеия и индивидуальные то есть все
type Union1 = '1' | '2';
type Union2 = '1' | '2' | '3';
type Union3 = Union1 | Union2;

//при таком слиянии оператором слияния в итоговый алиас попадает только общая часть тоесть идет исключение не пересекающихся элементов - ТАК ЖЕ ЭТОТ ОПЕРАТОР ИСПОЛЬЗУЕТСЯ И ДЛЯ ПОЛНОГО СЛИЯНИЯ ТИПОВ ПО АНАЛОГИИ С НАСЛЕДОВАНИЕМ В ИНТЕРФЕЙСАХ НО ПОВЕДЕНИЕ МЕНЯЕТСЯ
type Union4 = Union1 & Union2;
//НО ПРИ СЛИЯНИИ ОБЪЕКТНых типов ПОВЕДЕНИЕ ОПЕРВТОРА МЕНЯНТСЯ И ПРОСИХОДИТ ПОЛНОЕ СЛИЯНИЕ
type Union5 = { a: string; b: number } & { a: string; c: boolean; d: unknown };

//пример слияния
type User = {
    readonly email: string;
    readonly login: string;
    password: string;
};

type Person = {
    isOnline?: boolean;
};

//аналог наследования в интерфейсах такой вот убогий синтаксис
type Developer = {} & User & Person;

const dev: Developer = {
    //все поля алиаса user , person
};

export {};
