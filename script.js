"use strict";
let money = 55000,
  income = 'фриланс',
  addExpenses = 'Бензин, Пиво, Продукты, Коммуналка, Сотовый, Интернет',
  deposit = true,
  mission = 300000,
  period = 6;


let lowercase = (addExpenses.toLocaleLowerCase()),
  splitString = (lowercase.split(', ')),
  budgetDay = Math.floor(money / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log(splitString);
console.log(budgetDay);
console.log('Цель заработать ' + mission + ' рублей');

money = prompt('Ваш месячный доход ?', '45000');
console.log('Месячный доход ' + money + ' рублей');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
  'Квартплата, бензин, кредит');
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
let expenses1 = prompt('Введите обязательную статью расходов?', 'вода, еда, газ');
let expenses2 = prompt('Введите обязательную статью расходов?', 'пиво, рыба, колбаса');
let amount1 = prompt('Во сколько это обойдется?', '5000');
let amount2 = prompt('Во сколько это обойдется?', '4000');
console.log(expenses1);
console.log(expenses2);

console.log(amount1);
console.log(amount2);

let budgetMonth = (money - amount1 - amount2);
console.log('Бюджет на месяц: ' + budgetMonth);

period = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + period + ' месяцев(-а)');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Дневной бюджет: ' + budgetDay);

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего')
} else if (budgetDay <= 0) {
  console.log('Что то пошло не так');
}