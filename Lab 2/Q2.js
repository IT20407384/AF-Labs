
function Vehicle(type) {
    this.type = type;
    Vehicle.vehicleCount++;
}

Vehicle.prototype.drive = function () {
    console.log('Vehicle is driving');
};

Vehicle.vehicleCount = 0;

let vehicle = new Vehicle('Toyota');

console.log(Vehicle.vehicleCount);
console.log(vehicle.type);
vehicle.drive();

///////////////////////////

function Car() {
    Vehicle.call(this, 'Nissan');

    //without calling the parent class constructor from the
    //child class, car.type and Vehicle.vechileCount will be incorrect.
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function () {
    console.log('Wheels are balanced');
}

let car = new Car();

car.balanceWheels();
car.drive();

console.log(car.type);
console.log(Vehicle.vehicleCount);
