// Code your solution here:
/*
  returns an array of driver objects
  that have a revenue attribute
  that's greater than the passed-in revenue argument.
*/

function driversWithRevenueOver(drivers, revenue) {
	return drivers.filter(function (driver) {
		return driver.revenue > revenue;
	});
}

function driverNamesWithRevenueOver(drivers, revenue) {
	return driversWithRevenueOver(drivers, revenue)
		.map((driver) => {
			return driver.name
		});
}

function exactMatch(drivers, attrObj) {
	return drivers.filter((driver) => {
		let attrObjTarget = false;
		for (const attr in attrObj) {
			attrObjTarget = driver[attr] === attrObj[attr];
		}
		return attrObjTarget;
	});
}

function exactMatchToList(drivers, attrObj) {
	return exactMatch(drivers, attrObj)
		.map((driver) => {
			return driver.name;
		});
}
