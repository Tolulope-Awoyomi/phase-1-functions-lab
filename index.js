// Code your solution in this file!

const ScuberHeadquarters = 42;
let pickupLocation;
function distanceFromHqInBlocks(pickupLocation) {
   return pickupLocation < ScuberHeadquarters ?  ScuberHeadquarters - pickupLocation : pickupLocation - ScuberHeadquarters
}

function distanceFromHqInFeet (pickupLocation) {
    distanceFromHqInBlocks (pickupLocation) 
    return (pickupLocation < ScuberHeadquarters ?  ScuberHeadquarters - pickupLocation : pickupLocation - ScuberHeadquarters) * 264
}

const block = 264;
let startBlock;
let destinationBlock;
function distanceTravelledInFeet (startBlock, destinationBlock) {
    return (startBlock < destinationBlock ?  destinationBlock - startBlock : startBlock - destinationBlock) * 264
}

let distance;
let result;
function calculatesFarePrice (startBlock, destinationBlock) {
    distance = (startBlock < destinationBlock ?  destinationBlock - startBlock : startBlock - destinationBlock) * 264
     if (distance <= 400) {
        return 0
      }
      else if (distance > 400 && distance <2000) {
        return 0.02 * (distance - 400)
      }
      else if (distance > 2000 && distance <2500)  {
        return 25
      }
      else if (distance >2500) {
        return'cannot travel that far'
      }
    }