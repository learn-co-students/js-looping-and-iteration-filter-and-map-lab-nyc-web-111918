function driversWithRevenueOver(array, number){
  return array.filter(function(driver){
    return driver.revenue > number
  })
}

function driverNamesWithRevenueOver(array, number){
  return driversWithRevenueOver(array, number).map(function(driver){
    return driver.name
  })
}

function exactMatch(array, object){
    return array.filter(function(driver){
        for (const key in object){
          if (object[key] === driver[key]){
            return driver;
          }
        }
    })
}

function exactMatchToList(array, object){
  return exactMatch(array, object).map(function(driver){
    return driver.name;
  })
}
