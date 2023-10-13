//если совсем не понятно чего ждать можно присовить дефолтное значение возвращаемому объекту
interface IanyObj {
    [key: string]: unknown;
}
export async function name1<T = IanyObj>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}
const data = name1('');

//когда понятно чего ожидать
interface ITodo {
    title: string;
    desc: string;
}

const data2 = name1<ITodo[]>('');
