// // Events
// const $cardButton = $card.querySelector('button');
// const $cardDescription = $cardButton.querySelector('p');

// // https://jsonplaceholder.typicode.com/

// function handleClick(event) {
//     // const description = promt('vvedite opiasnie', 'nacjnite pechatat');
//     // $cardDescription.innerHTML = description;

//     console.log('1 способ', event);
// }

// // 1 способ
// $cardButton.addEventListener('click', handleClick)

// // 2 способ
// $cardButton.onclick = function() {
//     console.log('2 способ', event);
// }

//Всплытие событий

// const $form = document.getElementById('form');
// const $field = document.getElementById('field');
// const $label = document.getElementById('label');

// function handleForm(e) {
//     alert('Событие произошло на Form')
// }
// function handleField(e) {
//     alert('Событие произошло на field')
// }
// function handleLabel(e) {
//     alert('Событие произошло на label');
//     e.stopPropagation();
// }

// $form.addEventListener('click', handleForm)
// $field.addEventListener('click', handleField)
// $label.addEventListener('click', handleLabel)

