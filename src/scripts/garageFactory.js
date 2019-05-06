/*
    Author: Deep
    Name: createGarage.js
    Purpose: To store cars in garages
*/

const garage = [];

const GarageManager = {
  setInventory: function(car) {
    garage.push(car);
  },
  getInventory: function() {
    return garage;
  },
  getOneCar: function(carObj) {
    return garage.find(
      car => car.make === carObj.make && car.model === carObj.model
    );
  }
};
export default GarageManager;
