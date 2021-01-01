const directions = {
  top: '🔼',
  bottom: '🔽'
}

const elevatorNode = document.querySelector('.elevator');
const directionNode = document.querySelector('.direction');
let prevDistance = 0;
let floorNumber = 10;
let floorHeight;
let direction = directions.bottom;
displayInfo(direction, floorNumber);

elevatorNode.addEventListener('scroll', (event) => {
  console.log(event);
  console.log('ScrollTop', event.target.scrollTop);
  floorHeight = 150; // Math.floor(event.target.scrollHeight / 11);
  console.log(floorHeight);
  let currentDistance = event.target.scrollTop + 30;
  console.log('ScrollTop - currentDistance', currentDistance);
  console.log('floor', currentDistance / floorHeight);
  floor = Math.floor(currentDistance / floorHeight);
  console.log('floor', floor);
  if (prevDistance < currentDistance) {
    direction = directions.bottom;
  } else {
    direction = directions.top;
  }
  let floorNumber = getFloorNumber(floor);
  displayInfo(direction, floorNumber);
  prevDistance = currentDistance;
});

function displayInfo(direction, floor) {
  directionNode.innerHTML = `Kierunek: ${direction} Floor: ${floor}`;
}

function getFloorNumber(floor) {
  switch (floor.toString()) {
    case '0': 
      return 10;
    case '1': 
      return 9;
    case '2': 
      return 8;
    case '3': 
      return 7;
    case '4': 
      return 6;
    case '5': 
      return 5;
    case '6': 
      return 4;
    case '7': 
      return 3;
    case '8': 
      return 2;
      case '9': 
      return 1;
    case '10': 
      return 0;
  }
}