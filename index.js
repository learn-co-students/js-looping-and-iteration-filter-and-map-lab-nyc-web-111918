// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function(driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map( function(driver) {
      return driver.name;
    })
};

function exactMatch(drivers, object) {
  return drivers.filter( function(driver) {
    for (const key in object){
      // console.log(driver)
      if (driver[key] === object[key]) {
        return driver;
      };
    };
  });
};

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object)
    .map( function(driver) {
      return driver.name;
  })
};
