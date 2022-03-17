
class Vehicle {

    static vehicleCount = 0;

    constructor(type) {
        this.type = type;
        Vehicle.vehicleCount++;
    }

    drive() {
        console.log('Vehicle is driving');
    }
}

let vehicle = new Vehicle('Toyota');

console.log(Vehicle.vehicleCount);
console.log(vehicle.type);
vehicle.drive();

/////////////////////////////////////////////////

class Car extends Vehicle {

    constructor(props) {
        super(props);
    }

    balanceWheels() {
        console.log("Wheels are balanced");
    }
}

let car = new Car('Nissan');

console.log(Vehicle.vehicleCount);
console.log(car.type);
car.balanceWheels();
car.drive();