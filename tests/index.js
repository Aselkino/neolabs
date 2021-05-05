// ===== TEST DAY =====


let counter = 0;

while (counter < 100){
    counter++;

    if (counter % 3 === 0 && counter % 5 === 0){
        console.log('ping pong');
    } else if (counter % 3 === 0){
        console.log('ping');
    } else if (counter % 5 === 0){
        console.log('pong');
    } else {
        console.log(counter);
    }
}