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


let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);





console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log(splitString);
console.log(budgetDay);
console.log('Цель заработать ' + mission + ' рублей');

money = prompt('Ваш месячный доход ?', '45000');
console.log('Месячный доход ' + money + ' рублей');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);


let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 2000);
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?', 1000);

//Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function () {
  return (amount1 + amount2);
};
getExpensesMonth();

console.log('Расходы за месяц ' + getExpensesMonth());

//Функция возвращает Накопления за месяц(Доходы минус расходы)
const getAccumulatedMonth = function () {
  return (money - getExpensesMonth());
};
getAccumulatedMonth();


let accumulatedMonth = getAccumulatedMonth();


//Подсчитывает за какой период будет достигнута цель
const getTargetMonth = function () {
  period = Math.ceil(mission / accumulatedMonth);
  if (period === Infinity) {
    return console.log('Цель не будет достигнута');
  } else {
    return console.log('Цель будет достигнута за ' + period + ' месяцев(-а)');
  }
};

getTargetMonth();

budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Дневной бюджет: ' + budgetDay);


const getStatusIncome = function () {
  if (budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay > 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0) {
    return ('Что то пошло не так');
  }
};
console.log(getStatusIncome());