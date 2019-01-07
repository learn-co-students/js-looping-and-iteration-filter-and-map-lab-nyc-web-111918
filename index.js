// Code your solution here:
function driversWithRevenueOver(drivers, input){
  return drivers.filter(d => d.revenue>input)
}

function driverNamesWithRevenueOver(drivers, input){
  return drivers.filter(d => d.revenue>input).map(d=>d.name)
}

function exactMatch(drivers, input){
  return drivers.filter(function(d){
    found=false;

    for (const key in input){
      found = d[key]===input[key];
    }

    return found;
  });
}

function exactMatchToList(drivers, input){
  return drivers.filter(function(d){
    found=false;

    for (const key in input){
      found = d[key]===input[key];
    }

    return found;
  }).map(function(d){
    return d.name
  });
}
