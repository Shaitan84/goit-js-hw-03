'use strict'

const countTotalSalary = function (employees) {
    const employee = Object.values(employees);
    let totalSalary = 0;
    for (const key of employee) {
      totalSalary += key;
    }
    return totalSalary;
  };

  console.log(`Общая сумма зарплат: ${
    countTotalSalary({})}`);
  
  console.log(`Общая сумма зарплат: ${
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })}`,
  );
  
  console.log(`Общая сумма зарплат: ${
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })}`,
  );