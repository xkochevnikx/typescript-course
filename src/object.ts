interface Icar {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    //при таком синтаксисе я говорю что у меня тут еще может быть неограниченное колличество полей с строковым ключём и неизвестным значением либо заранее известным
    [key: string]: unknown | string;
}

let car: Icar = {
    wheels: 4,
    brand: 'bmv',
    type: 'sedan',
    isNew: false,
};
