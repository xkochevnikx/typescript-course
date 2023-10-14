import { avarage } from './function';
//простой пример присваивания алиасу типа переменной выше и уже при присваении новой переменной неправильного типа получаю ошибку
let str = 'Hello World';
type X = typeof str;
let x1: X = 3;

//пример возращения типа функции и присвоение его новой функции
type Fn = typeof avarage;
const max: Fn = (...numbers) => Math.max(...numbers);

//с помощью утилиты определяю что возвращает тип функции
type ReturnFN = ReturnType<typeof avarage>;
