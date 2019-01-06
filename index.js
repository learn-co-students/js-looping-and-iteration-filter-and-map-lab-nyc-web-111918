// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  array = driversWithRevenueOver(drivers, revenue)
  return array.map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, attribute) {
  let key = Object.keys(attribute)
  let value = attribute[key]
  return drivers.filter(function (driver) {
    return driver[key] === value
  })
}

function exactMatchToList(drivers, attribute) {
  array = exactMatch(drivers, attribute)
  return array.map(function(driver) {
    return driver['name']
  })
}
