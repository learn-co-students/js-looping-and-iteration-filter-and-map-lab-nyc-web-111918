// Code your solution here:
function driversWithRevenueOver(drivers, n){
  return drivers.filter(function(driver) {
    return (driver.revenue > n);
  })
}

function driverNamesWithRevenueOver(drivers, n){
  return drivers.filter(function(driver) {
    return (driver.revenue > n);
  }).map(function(driver){
    return driver.name;
  })
}


function exactMatch(drivers, obj){
  let objKey = Object.keys(obj);
  return drivers.filter(function(driver) {
    return (driver[objKey] == obj[objKey[0]]);
  })
}


function exactMatchToList(drivers, obj){
  let objKey = Object.keys(obj);
  return drivers.filter(function(driver) {
    return (driver[objKey] == obj[objKey[0]]);
  }).map(function(driver){
    return driver.name;
  })
}
