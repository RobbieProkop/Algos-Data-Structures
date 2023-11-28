// function analyzeCarMileage(cars) {
//   let highestMileageCar = cars[0];
//   let lowestMileageCar = cars[0];

//   let totalMileage = 0;

//   cars.forEach((car) => {
//     if (car.mileage > highestMileageCar.mileage) {
//       highestMileageCar = car;
//     }
//     if (car.mileage < lowestMileageCar.mileage) {
//       lowestMileageCar = car;
//     }
//     totalMileage += car.mileage;
//   });

//   let averageMileage = Number((totalMileage / cars.length).toFixed(2));

//   return {
//     averageMileage,
//     highestMileageCar,
//     lowestMileageCar,
//     totalMileage,
//   };
// }

function analyzeCarMileage(cars) {
  const result = cars.reduce(
    (res, car) => {
      if (car.mileage > res.highestMileageCar.mileage)
        res.highestMileageCar = car;

      if (car.mileage < res.lowestMileageCar.mileage)
        res.lowestMileageCar = car;

      res.totalMileage += car.mileage;
      res.averageMileage = Number((res.totalMileage / cars.length).toFixed(2));
      return res;
    },
    {
      highestMileageCar: cars[0],
      lowestMileageCar: cars[0],
      totalMileage: 0,
      averageMileage: 0,
    }
  );
  return result;
}

module.exports = analyzeCarMileage;
