"use strict";
let money = 55000,
  income = 'фриланс',
  addExpenses = 'Бензин, Пиво, Продукты, Коммуналка, Сотовый, Интернет',
  deposit = true,
  mission = 300000,
  period = 6;


let lowercase = (addExpenses.toLocaleLowerCase()),
  splitString = (lowercase.split(', ')),
  budgetDay = (money / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log(splitString);
console.log(budgetDay);