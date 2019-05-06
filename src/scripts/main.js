import sayHello from "./hello";
import sayGoodbye from "./goodbye";
import SandwichMaker from "./sandwichMaker";
import sandwichMaker from "./sandwichMaker";
import createCar from "./createCar";
import garage from "./garageFactory";

sayHello();
sayGoodbye();

SandwichMaker.placeOrder("rye", "capicola", "provolone");
sandwichMaker.getOrder();

// const garage = [];

// Create two cars using the function you imported
const mustang = createCar("Ford", "Mustang");
const accord = createCar("Honda", "Accord");
const jeep = createCar("Jeep", "Wrangler");

// Drive the cars for a while
console.log(mustang.drive("the grocery store"));
console.log(accord.drive("Indianapolis"));

// Park the cars in the garage

garage.setInventory(mustang);
garage.setInventory(accord);
garage.setInventory(jeep);

console.log(garage.getOneCar(mustang));
console.log("garage", garage.getInventory());
