// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  // let newArr = [];
  //
  //   for (var i = 0; i < drivers.length; i++) {
  //     if (revenue < drivers[i]["revenue"]) {
  //       newArr.push(drivers[i]);
  //     }
  //   }
  //   return newArr;
  //
  //   if (newArr.length === 0) {
  //     return [];
  //   }
return drivers.filter(function(driverObj){
    return driverObj["revenue"] > revenue;
 })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filtered = drivers.filter(function(driverObj){
    return driverObj["revenue"] > revenue
  })
  return filtered.map(function(driver){
    return driver["name"]
  })
}

function exactMatch(drivers, object) {
  let key = Object.keys(object)
  let value = object[key]
  let filtered = drivers.filter(function(driver){
    return driver[key] === value;
  })
  return filtered;
}

function exactMatchToList(drivers, object) {
  let filtered = exactMatch(drivers, object);
  let names = filtered.map(function(driver){
    return driver.name;
  })
  return names;
}
