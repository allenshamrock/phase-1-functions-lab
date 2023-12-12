// Code your solution in this file!
// function distanceFromHqInBlocks(num1, num2) {
//   const results = num1-num2;
//   console.log(results)
//   return results;
// }
// distanceFromHqInBlocks(50, 42);
function distanceFromHqInBlocks(pickupLocation) {
  // Scuber's headquarters on 42nd Street
  const hqLocation = 42;

  // Calculate the distance in blocks
  const distance = Math.abs(pickupLocation - hqLocation);

  console.log(distance); // Log the distance to the console

  return distance;
}
// Call the function with a pickup location of 50
distanceFromHqInBlocks(50);
