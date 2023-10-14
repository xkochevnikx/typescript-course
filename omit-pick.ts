//утилита omit принимает первым аргументом тип который из которого нужно выкинуть конкретное поле а pick наоборот возвращает те свойства что были переданы юнионом во втором параметре
interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

type TodoSimple = Omit<ITodo, 'completed'>;

type TodoSimple2 = Pick<ITodo, 'completed'>;
export {};
