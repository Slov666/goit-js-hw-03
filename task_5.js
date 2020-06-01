const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

const getAllPropValues = function (arr, prop) {
    const keys = [];
    for (const key of arr) {
        if (key[prop]) {
            keys.push(key[prop]);
        }
    }
    return keys;
};

/* const getAllPropValues = function(arr, prop) {
    let keys = [];
    for (let key of arr) {
        keys.push(key[prop]);
        if (keys.includes(undefined)) {
            keys = [];
            return keys
        }
    }
    return keys;
} */


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []