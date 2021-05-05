const $card = document.getElementById('card');

const $cardImage = $card.querySelector('img');

console.log($card.className)
$card.className += ' card-gold ';

$card.classList.add('card-rounder');
console.log($card.classList)

setTimeout(function(){
    $card.classList.remove('$card-gold');
}, 2000);

setInterval(function(){
    //classList.toggle() -> добавляет
    $card.classList.toggle('card-rounded');
}, 1000);

console.log($card.classList);

// style

$card.style.borderRadius = '20px';
$card.style.backgronudColor = 'yellow';

// // Events
// const $cardButton = $card.querySelector('button');
// const $cardDescription = $cardButton.querySelector('p');

// // https://jsonplaceholder.typicode.com/

// $cardButton.addEventListener('click', function() {

//     $cardDescription.innerHTML = description;

//     if ($cardDescription.innerHTML) {
//         $cardDescription.innerHTML = '';
//     } else {
//         $cardDescription.innerHTML= description;
//     };
// });

