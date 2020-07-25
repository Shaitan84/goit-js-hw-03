'use strict'

const findBestEmployee = function (employees) {
    const employee = { ...employees };
    let maxTask = 0;
    let nameEmployee = '';
  
    for (const key of Object.keys(employee))
      if (maxTask <= employee[key]) {
        maxTask = employee[key];
        nameEmployee = key;
      }
    return nameEmployee;
  };

  console.log(`Лучший сотрудник - ${
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    })}`,
  );
  
  console.log(`Лучший сотрудник - ${
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })}`,
  );
  
  console.log(`Лучший сотрудник - ${
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })}`,
  );