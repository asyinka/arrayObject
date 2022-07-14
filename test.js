
class Car{
    constructor(type, model, make, colour){
        this.type = type;
        this.model = model;
        this.make = make;
        this.colour = colour;
    }
    drive(){
        console.log(`You are driving ${this.type} made in ${this.model}`)
    }
};

const Limo = new Car("Limousine", 2019, "German", "Blue")
const Toyo = new Car("Toyota Camry", 2010, "Russia", "Gray")
const Jeep = new Car("Highlander", 2020, "Switzerland", "Blue")

const cars = [Limo, Toyo, Jeep]
console.log(cars[0].make);
// cars[2].drive();
// cars[0].drive();
// cars[1].drive();
startDrive(cars)
function startDrive(){
    for (let car of cars) {
        car.drive();
    }
}

// vehicle(Toyo);
// function vehicle(Car){
//     console.log(Car.type);
//     console.log(Car.model);
//     console.log(Car.make);
//     console.log(Car.colour);
// };
// changeColour(Limo, "White");
// vehicle(Limo)

// function changeColour(car, colour){
//     car.colour = colour;
// }