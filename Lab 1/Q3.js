
var vehicleName = "Toyota";

var printVehicleName = function() {
    console.log(this.vehicleName);
}

var vehicle = {
    vehicleName:"Nissan",
    getVehicleName: printVehicleName
}

printVehicleName();
vehicle.getVehicleName();


//this will not work inside the webstorm