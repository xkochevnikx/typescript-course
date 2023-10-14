type PcBrand = {
    model: string;
    year: number;
};

//мапинг юнион алиасов. Подставляю одно из значений в качетсве ключа с помощью оператора in
type ModelBrand = 'apple' | 'hp';

type MyPc = {
    [key in ModelBrand]?: PcBrand;
};

const pc: MyPc = {
    apple: {
        model: 'm2',
        year: 2023,
    },
};

function printPcCatalog(catalog: MyPc) {
    console.log(catalog.apple?.model);
}

type PatrOfWindow = {
    [key in 'document' | 'screen']?: Window[key];
};

const p: PatrOfWindow = {
    document: window.document,
};
