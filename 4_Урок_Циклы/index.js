// let counter = 1;
// counter++; // постфикс
// ++counter; // префикс
// console.log(++counter);

// let views = 0;
// console.log(views++);
// console.log(views);

// let seconds = 60;
// console.log(seconds++);
// console.log(seconds);

// let views = 0;
// views = views + 1;
// views++;
// console.log(views);

// let views = 10 % 3
// console.log(views);

// const a = "1";
// const b = "2";
// console.log(+a + +b);     //преобразование

// let a = 2, b = 2, c = a + b;
// console.log(a, b, c);

// let bagPrice = 300;
// let shoesPrice = 1000;
// orderPrice = bagPrice + shoesPrice;
// orderPrice = orderPrice - ((orderPrice / 100) * 30);
// console.log(orderPrice);


// =====ЦИКЛЫ===== //

// let counter = 0; 

// while(counter < 10){
//     console.log('Привет !!!', counter++);
// }


// let counter = 0;

// while (counter < 20){
//     counter++;
//     console.log(counter);
//     if (counter === 10){
//         break
//     }
// }

// let counter = 0;

// while (counter < 20){
//     counter++;
    
//     if (counter % 2 === 0){
//         console.log(counter)
//     }
// }

// let counter = 0;

// while (counter < 20){
//     counter++;
    
//     if (counter % 2 === 0){
//        continue; 
//     }
//     console.log(counter)
// }



// =====ЗАДАЧА Ping Pong=====

// let counter = 0;

// while (counter < 100){
//     counter++;
    
//     if (counter % 3 === 0 && counter % 5 === 0) {
//         console.log('ping pong');
//     } else if (counter % 3 === 0){
//         console.log('ping');
//     } else if (counter % 5 === 0){
//         console.log('pong');
//     } else {
//         console.log(counter);
//     }
// }

// let counter = 0;

// do {
//     counter++;
//     if (counter % 3 === 0 && counter % 5 === 0){
//         console.log('ping pong')  
//     }else if (counter % 3 === 0){
//         console.log('ping');
//     }else if (counter % 5 === 0){
//         console.log('pong');
//     }else {
//         console.log(counter);
//     }

// } while (counter < 100);



// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('ping pong');
//     }else if (i % 3 === 0 ){
//         console.log('ping');
//     }else if (i % 5 === 0){
//         console.log('pong');
//     }else {
//         console.log(i);
//     }
// }




for ( let i = 0; i <100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('ping pong');
    } else if (i % 3 === 0){
        console.log('ping');
    }else if (i % 5 === 0){
        console.log('pong');
    }else{
        console.log(i);
    }
}

