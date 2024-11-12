function rentalCar(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let costoPorDia;
    if (tipoVehiculo === "compacto") {
        costoPorDia = 14000;
    }
    else if (tipoVehiculo === "mediano") {
        costoPorDia = 17000;
    }
    else if (tipoVehiculo === "camioneta") {
        costoPorDia = 28000;
    }
    else {
        console.log("Tipo de vehiculo no valido");
        return;
    }

    let costoTotal = costoPorDia * diasAlquiler;

    if (sillaParaBebe) {
        costoTotal += 1200 * diasAlquiler;
    }

    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${costoTotal}.`;

    if (sillaParaBebe) {
        mensaje += " El cliente pidio una silla para bebe";
    }

    console.log(mensaje);
}

//rentalCar ("compacto", 3, true)

// rentalCar ("mediano", 5, false)

// rentalCar ("camioneta", 6, true)

// rentalCar ("talco", 6, true)
