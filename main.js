


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
{ producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
{ producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
{ producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
{ producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
{ producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
{ producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
{ producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
{ producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
{ producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
{ producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
{ producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];

console.log(cars);
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
console.log(cars.sort((elemOne, elemTwoo) => elemOne.volume - elemTwoo.volume));
// - двигун = 2л
console.log(cars.filter(elem => elem.volume === 2));
// - виробник мерс
console.log(cars.filter(elem => elem.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник мерседес
console.log(cars.filter(elem => elem.volume > 3 && elem.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник субару
console.log(cars.filter(elem => elem.producer === 'subaru' && elem.volume > 3));
// - сили більше ніж 300
console.log(cars.filter(elem => elem.power > 300));
// - сили більше ніж 300 + виробник субару
console.log(cars.filter(elem => elem.power > 300 && elem.producer === 'subaru'));
// - мотор серіі ej
console.log(cars.filter(elem => elem.engine.startsWith('ej')));
// - сили більше ніж 300 + виробник субару + мотор серіі ej
console.log(cars.filter(elem => elem.power > 300 && elem.producer === 'subaru' && elem.engine.startsWith('ej')));
// - двигун меньше 3х літрів + виробник мерседес
console.log(cars.filter(elem => elem.volume < 3 && elem.producer === 'mercedes'));
// - двигун більше 2л + сили більше 250
console.log(cars.filter(elem => elem.volume > 2 && elem.power > 250));
// - сили більше 250  + виробник бмв
console.log(cars.filter(elem => elem.power > 250 && elem.producer === 'bmw'));



// - взять слдующий массив
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
];
// -- отсортировать его по id пользователей
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemTwoo.id - elemOne.id));
// -- отсортировать его по id пользователей в обратном опрядке
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemOne.id - elemTwoo.id));
// -- отсортировать его по возрасту пользователей
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemOne.age - elemTwoo.age));
// -- отсортировать его по возрасту пользователей в обратном порядке
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemTwoo.age - elemOne.age));
// -- отсортировать его по имени пользователей
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemOne.name.charCodeAt(0) - elemTwoo.name.charCodeAt(0)));
// -- отсортировать его по имени пользователей в обратном порядке
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemTwoo.name.charCodeAt(0) - elemOne.name.charCodeAt(0)));
// -- отсортировать его по названию улицы  в алфавитном порядке
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemOne.address.street.charCodeAt(0) - elemTwoo.address.street.charCodeAt(0)))
// -- отсортировать его по номеру дома по возрастанию
console.log(usersWithAddress.sort((elemOne, elemTwoo) => elemOne.address.number - elemTwoo.address.number));
// -- отфильтровать (оставить) тех кто младше 30
console.log(usersWithAddress.filter(elem => elem.age < 30));
// -- отфильтровать (оставить) тех у кого отрицательный статус
console.log(usersWithAddress.filter(elem => elem.status));
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
console.log(usersWithAddress.filter(elem => elem.status && elem.age < 30));
// -- отфильтровать (оставить) тех у кого номер дома четный
console.log(usersWithAddress.filter(elem => !(elem.address.number % 2)));


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
let carsArr = [
    {
        model: 'Nissan', power: 2.5,
        driver: { name: 'userD_1', age: 34, experians: 9 },
        price: 17000, years: 2013
    },
    {
        model: 'lexus', power: 2,
        driver: { name: 'userD_2', age: 44, experians: 23 },
        price: 98000, years: 2015
    },
    {
        model: 'BMW', power: 2,
        driver: { name: 'userD_3', age: 99, experians: 67 },
        price: 79000, years: 2020
    },
    {
        model: 'mersedes', power: 3,
        driver: { name: 'userD_4', age: 16, experians: 9 },
        price: 60000, years: 2021
    },
    {
        model: 'VW', power: 2,
        driver: { name: 'userD_5', age: 42, experians: 34 },
        price: 50000, years: 2016
    },
    {
        model: 'Volvo', power: 2.5,
        driver: { name: 'useD_6', age: 23, experians: 4 },
        price: 78000, years: 2019
    },
    {
        model: 'Infiniti', power: 3,
        driver: { name: 'userD_7', age: 33, experians: 7 },
        price: 43000, years: 2018
    },
    {
        model: 'Mazda', power: 3.5,
        driver: { name: 'userD_8', age: 17, experians: 2 },
        price: 25000, years: 2017
    },
    {
        model: 'Toyota', power: 3,
        driver: { name: 'userD_9', age: 43, experians: 23 },
        price: 35000, years: 2021
    },
    {
        model: 'Audi', power: 13,
        driver: { name: 'userD_10', age: 29, experians: 9 },
        price: 75000, years: 2021
    }
];
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.+
// Власник автомобіля теж має бути обєкт, у якого є поля+
// Імя, вік, стаж водіння.+
// Створити не менше 7 та не більше 20 машинок.+
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
let i = 0;
let arr = carsArr.map(elem => {
    if (i < carsArr.length / 2) {
        elem.power += (elem.power / 100) * 10;
    }
    i++;
    return elem;
});
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
i = 0;
let arrNewDriver = carsArr.map(elem => {
    if (i < carsArr.length / 2) {

        /*  elem.driver.name += parseInt(Math.random() * 99);
         elem.driver.age = parseInt(Math.random() * 50);
         elem.driver.experians = parseInt(Math.random() * 20); */

    }
    i++;
    return elem
});
console.log(arrNewDriver);
// Для початку вкладіть всі наші створені автомобілі в масив cars.+
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
i = 0;
console.log(arrNewDriver.map(elem => {
    if (i % 2) {
        elem.power += (elem.power / 100) * 10;
        elem.price += (elem.price / 100) * 5;
    }
    i++;
    return elem;
}))
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
console.log(arrNewDriver);
console.log(arrNewDriver.map(elem => {
    if (elem.driver.age > 25 && elem.driver.experians < 5) {
        console.log(elem.driver.experians);
        elem.driver.experians += 1;
    }
    return elem;
}))
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sumMoney = 0;

arrNewDriver.forEach(elem => sumMoney += elem.price);
console.log(sumMoney);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

function creatArrRand() {
    let arrRandNum = [];
    for (let i = 0; i < 10; i++) {
        arrRandNum[i] = parseInt(Math.random() * 10 + 1);
    }
    return arrRandNum;
}
let arrSortN = creatArrRand();
console.log(arrSortN);
arrSortN.sort((a, b) => a - b);

console.log(arrSortN);
let n = 4;
let min = -1;
let max = -1;

arrSortN.filter((elem, index) => {
    if (elem === n) {

        if (min === -1) {
            min = index;
        } else {
            max = index;
        }
    }
})
if (min === -1 && max === -1) {
    console.log('Not Number')
} else if (min != -1 && max === -1) {
    console.log(min + ' one index');
} else {
    console.log(min + ' min');
    console.log(max + ' max');
}