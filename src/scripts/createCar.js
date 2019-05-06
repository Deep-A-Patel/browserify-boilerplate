/*
    Author: your name here
    Name: createCar.js
    Purpose: Produces a new car object
*/
const CarFactory = (make, model) => {
  const newCar = {
    make: make,
    model: model,
    drive: function(where) {
      console.log("vroooom, driving the car to " + where);
    }
  };

  return newCar;
};

export default CarFactory;
