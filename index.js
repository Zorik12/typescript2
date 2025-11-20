const names = ['Анна', 'Иван', 'Мария', 'Петр', 'Ольга'];
const agesr = [25, 30, 18, 42, 27];
const booleans = [true, false, true, true, false];
console.log('Массив имён:', names);
console.log('Массив возрастов:', agesr);
console.log('Массив логических значений:', booleans);
const fruts = ["Яблоко", "бананв", "Апельсин"];
console.log(fruts[0]);
console.log(fruts[2]);
// Создание объекта book
const book = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1966
};
console.log('Название книги:', book.title);
console.log('Автор:', book.author);
console.log('Год издания:', book.year);
const user1 = {
    name: 'Мария',
    age: 30
};
console.log(user1);
const users = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 30 },
    { name: 'Петр', age: 35 },
    { name: 'Ольга', age: 28 }
];
for (let i = 0; i < users.length; i++) {
    console.log("Имя:", users[i].name, "Возраст:", users[i].age);
}
const numbers = [1, 2, 3];
numbers.push(4);
console.log('1. Массив после добавления 4:', numbers);
const nums = [1, 2, 3, 4];
const multipliedNums = nums.map(num => num * 10);
console.log('2. Массив умноженный на 10:', multipliedNums);
const ages = [15, 18, 21, 13, 30];
const adults = ages.filter(age => age >= 18);
console.log('3. Совершеннолетние:', adults);
const usersу = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 30 },
    { name: 'Петр', age: 35 }
];
const foundUser = usersу.find(user => user.name === 'Мария');
console.log('4. Найденный пользователь:', foundUser || 'Пользователь не найден');
const notFoundUser = usersу.find(user => user.name === 'Анна');
console.log('4. Поиск несуществующего:', notFoundUser || 'Пользователь не найден');
const mixedNumbers = [5, -3, 12, 0, -7, 8];
const positiveDoubled = mixedNumbers
    .filter(num => num > 0)
    .map(num => num * 2);
console.log('5. Положительные числа удвоенные:', positiveDoubled);
const sortNumbers = [10, 31, 3, 2];
const defaultSort = [...sortNumbers].sort();
console.log('6. Сортировка как строки:', defaultSort);
const ascendingSort = [...sortNumbers].sort((a, b) => a - b);
console.log('6. Сортировка по возрастанию:', ascendingSort);
const descendingSort = [...sortNumbers].sort((a, b) => b - a);
console.log('6. Сортировка по убыванию:', descendingSort);
const products = [
    { name: "Ноутбук", price: 50000, inStock: true },
    { name: "Мышь", price: 1500, inStock: false },
    { name: "Клавиатура", price: 3500, inStock: true },
    { name: "Монитор", price: 25000, inStock: true },
    { name: "Наушники", price: 5000, inStock: false }
];
const inStockProducts = products.filter(product => product.inStock);
const inStockPrices = inStockProducts.map(product => product.price);
let total = 0;
for (const product of inStockProducts) {
    total += product.price;
}
const sortedByPrice = [...inStockProducts].sort((a, b) => a.price - b.price);
console.log("Товары в наличии:", inStockProducts);
console.log("Цены товаров в наличии:", inStockPrices);
console.log("Общая сумма:", total);
console.log("По возрастанию цены:", sortedByPrice);
