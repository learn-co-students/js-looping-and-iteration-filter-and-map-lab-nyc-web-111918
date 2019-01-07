// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  let newArr = [];
  drivers.filter(function(driver){
    if (driver.revenue > revenue){
      newArr.push(driver);
    }
  });
  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newArr = [];
  drivers.filter(function(driver){
    if (driver.revenue > revenue){
      newArr.push(driver.name);
    }
  });
  return newArr;
}

function exactMatch(drivers, obj){
  let newArr = [];
  drivers.filter(function(driver){
    if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]){
      newArr.push(driver);
    }
  });
  return newArr;
}

function exactMatchToList(drivers, obj){
  let newArr = [];
  drivers.filter(function(driver){
    if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]){
      newArr.push(driver.name);
    }
  });
  return newArr;
}
