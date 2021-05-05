// document.querySelector('#h3').onclick = helloFunction;
// document.querySelector('#h3').onclick = byeFunction;

// document.querySelector('#h3').onclick = function() {
//     helloFunction();
//     byeFunction();
// }


function helloFunction() {
    console.log(this);
    console.log('Hi');
}

function byeFunction() {
    console.log(this);
    console.log('bye');
}

document.querySelector('#h3').addEventListener('click', helloFunction);
document.querySelector('#h3').addEventListener('click', byeFunction);
document.querySelector('#h3').removeEventListener('click', helloFunction);


// addEventListener - можем вешать собятия, можем вешать несколько
// обработчиков на один и тот же элемент на одно и то же события