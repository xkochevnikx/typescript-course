function fn1(arg: { a: number; b: string }) {
    return arg.a + arg.b;
}

type TO = ReturnType<typeof fn1>;

//утилита возвращает типы параметров функции
type T1 = Parameters<typeof fn1>;
