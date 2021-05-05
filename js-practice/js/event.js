const buttons = document.querySelectorAll('.btn');
console.log(buttons);

const handClick = (event) => {
    console.log("target >", event.target)
    console.log("curtarget >", event.currentTarget)
    console.log(event.target === event.currentTarget)
    // event.stopPropagation()
    //   метод .stopPropagation() для того, 
    //   чтобы остановить передачу событий между элементами.
}

window.addEventListener('click', function(event) {
    console.log('Window-click', event.target)
    event.stopPropagation();
}, {capture: true})

buttons.forEach(button => {
    button.addEventListener('click', handClick)
})

const img = document.querySelector('img');
img.addEventListener('mouseover', (event) => {
    console.log(event.currentTarget)
    console.log(this)  // у стрелчной функции нет собственного this
})











//event.target – самый глубокий элемент, 
//на котором произошло событие.

// event.currentTarget (=this) – элемент, 
//на котором в данный момент сработал обработчик 
//(тот, на котором «висит» конкретный обработчик)

//   метод .stopPropagation() для того, 
//   чтобы остановить передачу событий между элементами.