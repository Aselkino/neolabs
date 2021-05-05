// document.querySelector('h2').onclick = helloFunction;
// document.querySelector('h2').onclick = byeFunction;

// document.querySelector('h2').onclick = function() {
//     helloFunction();
//     byeFunction();
// }

// function helloFunction() {
//     console.log(this);
//     console.log('HI!');
// }

// function byeFunction() {
//     console.log(this)
//     console.log('BYE!');
// }

// document.querySelector('h2').addEventListener('click', helloFunction);
// document.querySelector('h2').addEventListener('click', byeFunction);
// document.querySelector('h2').removeEventListener('click', helloFunction);

let wrapperElement = document.getElementById('wrapper');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('searchBtn');

searchButton.addEventListener('click', search);
searchInput.addEventListener('click', search);
wrapperElement.addEventListener('dblclick', search)
searchInput.addEventListener('keyup', chekPolitcorectonost)

function chekPolitcorectonost() {
    if(searchInput.value === '100') {
        alert('Bad number');
    }}

function search() {
    alert('we want to find this: ' + searchInput.value)
}



