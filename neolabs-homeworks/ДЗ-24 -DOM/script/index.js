//1 найти корневой элемент
const $root = document.getElementById('root');

//2 создать 3 тэга
const $first = document.createElement('div');
const $second = document.createElement('div');
const $third = document.createElement('div');


$root.appendChild($first);
$root.appendChild($second);
$root.appendChild($third);


//создать размеры
const WIDTH = 150;
const HEIGHT = 150;

const $nodeElements = [$first, $second, $third];

$nodeElements.forEach(function($div){
    $div.style.width = WIDTH + 'px';
    $div.style.height = HEIGHT + 'px';
    $div.style.border = '5px solid black';
    $div.style.margin = '2px';
});


// // $first.classList.add('bordered')
// $first.classList.add('colored')
// 4) определяем цвета и пишем функцию для случайного выборки цвета
// function getRandomColor() {
//     const COLORS = ['red', 'green', 'olive', 'black'];
//     return COLORS[Math.floor(Math.random() * COLORS.length)];
// }
setTimeout(function() {
    console.log($first.classList)

    $first.classList.toggle('powered');
    // $second.classList.toggle('powewred')

    // console.log($first.classList)
    // $nodeElements.forEach(function($div){
    //     $div.style.backgroundColor = getRandomColor();
    // })
}, 2000);






// $first.innerHTML = `
//     <p>first div </p>
//     <span> span </span>
// `;
// $second.innerHTML = `
//     <p>second div </p>
// `;
// $third.innerHTML = `
//     <p>third div </p>
// `



// console.log($root)

// =======


