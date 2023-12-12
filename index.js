// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  const distance = Math.abs(pickupLocation - headquarters);
  return distance;
}

distanceFromHqInBlocks(50);

function distanceFromHqInFeet(pickupLocation) {
  const eachFeetBlock = 264;

  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeet = eachFeetBlock * distanceInBlocks;
  return distanceInFeet;
}
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination) {
  const eachFeetBlock = 264;
  const distanceTravelled = Math.abs((destination - start) * eachFeetBlock);
  return distanceTravelled;
}

distanceTravelledInFeet(34, 38);

function calculatesFarePrice(start, destination) {
  const distanceTravelled = Math.abs((destination - start) * 264);
  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled < 2500) {
    return 25;
  } else if (distanceTravelled > 2500) {
    return "cannot travel that far";
  }
}

calculatesFarePrice(34, 24);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 32);
calculatesFarePrice(43, 44);
