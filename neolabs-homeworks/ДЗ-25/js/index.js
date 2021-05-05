let page = document.querySelector('.page');
let click = document.querySelector('.click');

click.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');

var access = document.getElementById('click-txt');
var code = access.innerHTML;

access.innerHTML = 'Дневная версия сайта';

};




