//утилита exclude - в данном пример принимает два параметра первый это юнион второй строка (но может быть тоже юнион), второй аргумент это то что нужно вычесть из первого и осташееся вернуть

type TO = Exclude<'a' | 'b' | 'c', 'a'>;
type TO2 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'd'>;

type TO3 = Exclude<string | number | (() => void), Function>;

type Status = 'success' | 'error' | 200 | 404;

type StringStatus = Exclude<Status, number>;

//extract наоорот извлекает второе значение из первого
type TO4 = Extract<string | number | (() => void), Function>;
