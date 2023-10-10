//type guards - кроме всего прочего для тайп гуардов используються функции предикаты

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    //предикат возвращает никакой то тип а утверждение/доказательство того что pet это fish
    return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim();
    }

    return animal.fly();
}
