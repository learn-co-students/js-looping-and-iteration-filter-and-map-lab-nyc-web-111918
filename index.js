// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, match){
  return drivers.filter(function(driver){
    debugger;

    for (const name in match) {

        matches = (driver[name] === match[name])}
        return matches
        debugger;
  })
}


function exactMatchToList(drivers,match){
  return exactMatch(drivers, match).map(function(driver){
    return driver.name
  })
}
