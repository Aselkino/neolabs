class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log('${this.name} бежит со скоростью ${this.speed}');
    }
    stop() {
        this.speed = 0;
        console.log('${this.name} стоит');
    }
}
class Homosappiens extends Animal {
    whoAmI() {
        console.log('Привет меня зовут Андрей');
    }
}
const homosappiens = new Homosappiens('Андрей')
homosappiens.run(500);
homosappiens.stop();
homosappiens.whoAmI();


// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this.name);
//         return this.name
//     } 
//     changeName(newName) {
//         this.name = newName;
//     }
// }

// const admin = new User('John');
// console.log(admin);
// admin.changeName('Petr');
// admin.getName();
// console.log(admin);




// function CarFactory(name, speed, color) {
//     // this.wheels = 0;
//     // this.color = 'black'
// // const car1 = new CarFactory();
// // console.log(car1);

//     this.name = name;
//     this.speed = speed;
//     this.color = color;

//     this.status = false;

//     this.getCarInfo = function() {
//         let carInfo = `
//             название машины: ${this.name}
//             Цвет: ${this.color}
//             Скорость: ${this.speed}
//         `;
//         console.log(carInfo);
//         return carInfo;    
//     };
        
//     this.setName = function(newName) {
//         this.name = newName;
//     }

//     this.run = function() {
//         if (this.isPowered) {
//             console.log('Машина уже включена');
//         } else {
//             console.log('Включаю машину...');
//             this.isPowered = true;
//         }
//     }

//     this.stop = function() {
//         if (this.isPowered === false) {
//             console.log('Машина уже остановлена!!');
//         } else {
//             this.isPowered = false;
//             console.log('Выключаю машину...');
//         } 
//     }
// }
// const car1 = new CarFactory('Bentley', 400, 'red')
// // car1.getCarInfo();
// // car1.setName('BMW');
// // car1.getCarInfo();

// // car1.stop();
// // car1.run();
// // console.log(car1.isPowered);


