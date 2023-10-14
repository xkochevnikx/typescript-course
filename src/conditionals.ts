//условные типы. Например создаю алиасы в которых в зависимости от второго значению в рекорде типы отличаются. И создаю третий алиас который принимает динамический тип и сужаю его возможное значение до строки, если это верно то он будет возвращать  первый алиас если нет то второй
//в ts выражения для условных контсерукций доступен только тернарный оператор

let x = 16;
let isNeg = x >= 0 ? 'no' : 'yes';

type StringRecord = Record<string, string>;
type DateRecord = Record<string, Date>;

type ResultRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = ResultRecord<string>;
type Obj2 = ResultRecord<Date>;

let obj: Obj1 = {
    s: 'd',
};
