// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(driver => driver.revenue > num);
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(driver => driver.name);
}

function exactMatch(array, object) {
  let attrName = Object.keys(object)[0];
  return array.filter(driver => driver[attrName] === object[attrName]);
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(driver => driver.name);
}
