// Code your solution here:
// It returns an array of `driver` objects that have a `revenue` attribute that's greater than the passed-in `revenue` argument.
function driversWithRevenueOver(drivers, num) {
 return drivers.filter(function (driver) {return driver.revenue > num;})
}

function driverNamesWithRevenueOver(drivers, num) {
  select = drivers.filter(function (driver) {return driver.revenue > num;})
  const mapped = select.map(function (driver){
    return driver.name;})
  return mapped
}

function exactMatch(drivers, object){
  const select = drivers.filter(function (driver) {
    return (Object.values(driver)[0] === Object.values(object)[0] || Object.values(driver)[1] === Object.values(object)[0]);
  })
  // debugger
  return select;
}


function exactMatchToList(drivers, object) {
  const select = drivers.filter(function (driver) {
    return (Object.values(driver)[0] === Object.values(object)[0] || Object.values(driver)[1] === Object.values(object)[0]);
  })
  const mapped = select.map(function (names){
    return names.name;
  })
  // debugger
  return mapped;
}
