function analyzeCarMileage(cars) {
  let highestMileageCar = cars[0];
  let lowestMileageCar = cars[0];

  let totalMileage = 0;

  cars.forEach((car) => {
    if (car.mileage > highestMileageCar.mileage) {
      highestMileageCar = car;
    }
    if (car.mileage < lowestMileageCar.mileage) {
      lowestMileageCar = car;
    }
    totalMileage += car.mileage;
  });

  let averageMileage = Number((totalMileage / cars.length).toFixed(2));

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
