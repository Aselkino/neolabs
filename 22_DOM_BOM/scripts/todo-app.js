const TODOS = JSON.parse(localStorage.getItem('todos')) || [];


const $root = document.getElementById('root');

//кнопка для добавления задачи
const $todoBTN = $root.querySelector('#todo-add');

//текстовое поле для ввода названия задачи
const $todoInput = $root.querySelector('#todo-text');

//контайнер для отрисовки задач
const $todos = $root.querySelector('#todos')

function renderTodos() {
    $todos.innerHTML = `
    ${TODOS.map((todo) => `<p>${todo}</p>`).join('')}
`; 
}
renderTodos();
const $display = $root.querySelector('#display');
let inputValue = '';

// берем список задач из localStorage
const ENTER_CODE = 13;

//при добавлении сохраняем задачу в localStorage
$todoBTN.addEventListener('click', addTodo);

onclick="localStorage.removeItem('todo-clear');todo-clear.value=''"

$todoBTN.addEventListener('keydown', function(e) {
    if (e.keyCode !== ENTER_CODE) {
        return;
    }
    addTodo()
});

function addTodo(){
    if (!$todoInput.value) {
        alert('Введите текст!!');
        return;
    }
    TODOS.push($todoInput.value);
    renderTodos();
    $todoInput.value = ''; 

    localStorage.setItem('todos', JSON.stringify(TODOS));
}

//перерисовываем