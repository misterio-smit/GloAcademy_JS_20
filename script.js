"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 300000,
  period = 6;




let start = function () {
  do {
    money = +prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();


let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

console.log(addExpenses.toLowerCase().split(', '));

//Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов?');

    sum += +prompt('Во сколько это обойдется?');

    while (!isNumber(sum)) {
      sum += +prompt('Во сколько это обойдется?');
    }
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();


console.log('Расходы за месяц ' + expensesAmount);

//Функция возвращает Накопления за месяц(Доходы минус расходы)
const getAccumulatedMonth = function () {
  return (money - expensesAmount);
};
getAccumulatedMonth();


let accumulatedMonth = getAccumulatedMonth();
console.log("accumulatedMonth" +
  accumulatedMonth);


//Подсчитывает за какой период будет достигнута цель
const getTargetMonth = function () {
  period = Math.ceil(mission / accumulatedMonth);
  if (period === Infinity || accumulatedMonth < 0) {
    return console.log('Цель не будет достигнута');
  } else {
    return console.log('Цель будет достигнута за ' + period + ' месяцев(-а)');
  }
};
console.log('period ' + period);
getTargetMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);
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