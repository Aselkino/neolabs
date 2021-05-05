// a = 10;
// b = 30;
// c = 40;
// d = 32;


// if (d < c || d < b) {
//     console.log("Приземляемся!")
// }

// if (d > b || d > a || d > C) {
//     console.log("Возвышаемся!")
// } 

// if (d > c && d > b) {
//     console.log("Фаталити!")
// }



let firstCar = {
    name: 'BMW',
    speed: 200,
    color: 'black',
    quality: 10,
    basePrice: 10000
}
 
if (firstCar.speed > 150 ){
    firstCar.basePrice = firstCar.basePrice + 1000
} else if ( firstCar.speed > 100) {
    firstCar.basePrice = firstCar.basePrice + 500
} else if ( firstCar.basePrice > 50) {
    firstCar.basePrice = firstCar.basePrice + 200 
}

console.log(firstCar.basePrice);

if ( firstCar.quality > 7 ) {
    firstCar.basePrice = firstCar.basePrice + 900
} else if ( firstCar.quality > 5) {
    firstCar.basePrice = firstCar.basePrice + 500
} 

let secondCar = {
    name: 'Porshe',
    speed: 260,
    color: 'yellow',
    quality: 20,
    basePrice: 80000
}

if (firstCar.speed > 150 ) {
    firstCar.basePrice = firstCar.basePrice + 1000
} else if ( firstCar.speed > 100 ) {
    firstCar.basePrice = firstCar.basePrice + 500 
} else if ( firstCar.basePrice > 50 ) {
    firstCar.basePrice = firstCar.basePrice + 200
}


if (firstCar.quality > 7 ) {
    firstCar.basePrice =firstCar.basePrice + 900
} else if (firstCar.quality > 5) {
    firstCar.basePrice = firstCar.basePrice +500
}

console.log(firstCar.basePrice);


let thirdCar = {
    name: 'Hyundai sonata',
    speed: 240,
    color: 'green',
    quality: 15,
    basePrice: 50000
}

let totalPrice = 0;

