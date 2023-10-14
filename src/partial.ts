interface ITodo {
    id: number;
    title: string;
    completed: boolean;
    description?: string;
}

//утилиты делает все значения только для чтения

type ReadonlyTodo = Readonly<ITodo>;

//все поля делает не обязательными
type PartialTodo = Partial<ITodo>;
// делает все поля обязательными
type RequiredTodo = Required<ITodo>;
