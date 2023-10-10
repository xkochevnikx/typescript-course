//type guards - кроме всего прочего для тайп гуардов используються функции ПРЕДИКАТЫ ВОЗВРАЩАЮЩИЕ УТВЕРЖДЕНИЯ

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

interface IOrder {
    address: string;
}

interface ITelephoneOrder extends IOrder {
    callerNumber: string;
}

interface IInternetOrder extends IOrder {
    email: string;
}

type PossibleOrders = ITelephoneOrder | IInternetOrder | undefined;

const order1 = {
    address: 'spb',
    email: 'xxx',
    callerNumber: '12345',
};

function isAnInternetOrder(order: PossibleOrders): order is IInternetOrder {
    return !!order && 'email' in order; //order может быть undefined и если он вернет его нам это не нужно поэтому его надо привести к булевлму значению и далее проверяю наличие ключа в объекте
}

function isATelephoneOrder(order: PossibleOrders): order is ITelephoneOrder {
    return !!order && 'callerNumber' in order;
}

function makeOrder(order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email); //ТО ЧТО ТУТ ЕСТЬ АВТОВЫВОД ГАРАНТИРОВАННО ВОЗВРАЩАЕМЫМ ТИПОМ ПРЕДИКАТА
    } else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
