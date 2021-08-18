"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let start = function () {
  do {
    money = +prompt('Ваш месячный доход?');
  }
  while (!isNumber(money) || money === 0);

};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 45000,
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,



  asking: function () {

    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      while (isNumber(itemIncome) || itemIncome === "") {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      }
      let cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
      while (!isNumber(cashIncome) || cashIncome === 0) {
        cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
      }
      appData.income[itemIncome] = cashIncome;
    }


    let addExpenses = prompt('Перечислите возможные расходы через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(' ')
      .map(j => j.charAt(0).toUpperCase() + j.substr(1).toLowerCase()).join(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {

      let name = prompt('Введите обязательную статью расходов?');
      while (isNumber(name) || name === "") {
        name = prompt('Введите обязательную статью расходов?');
      }
      let money = +prompt('Во сколько это обойдется?');

      while (!isNumber(money) || money === 0) {
        money = +prompt('Во сколько это обойдется?');
      }
      appData.expenses[name] = money;
    }
  },

  //Функция возвращает сумму всех обязательных расходов за месяц
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
    return appData.expensesMonth;
  },

  //Функция возвращает Накопления за месяц(Доходы минус расходы)
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    return appData.budgetMonth;
  },

  //Подсчитывает за какой период будет достигнута цель
  getTargetMonth: function () {
    appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    if (appData.period === Infinity || appData.budgetMonth < 0) {
      return ('Цель не будет достигнута');
    } else {
      return ('Цель будет достигнута за ' + appData.period + ' месяцев(-а)');
    }
  },

  getStatusIncome: function () {
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    if (appData.budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0) {
      return ('Что то пошло не так');
    }
  },

  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = +prompt('Какой годовой процент?', '10');
      }
      while (!isNumber(appData.percentDeposit) || appData.percentDeposit === 0);
      do {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      }
      while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0);

    }
  },

  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  }


};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();


console.log('Расходы за месяц ' + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log('Уровень дохода: ' + appData.getStatusIncome());
console.log(appData.expensesMonth);


for (let key in appData) {
  console.log('"Наша программа включает в себя данные: " ' + key + ' ' + appData[key]);
}
console.log(appData.addExpenses);