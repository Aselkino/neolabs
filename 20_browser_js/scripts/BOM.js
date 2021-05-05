// const API_URL = 'http://localhost:7979/news';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function loadNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        return data;

    } catch (e) {
        alert(e.message);
    }
}

const $root = document.getElementById('root')

function createCardTemplate(name, phone, email) {
    return `
        <div class = "div">
            имя: ${name}
            тел: ${phone}
            почта: ${email}
        </div>`;
}

async function renderUsers() {
    try {
        const users = await loadNews();

        users.forEach(function(user) {
            const { name, email, phone} = user;
            const cardTemplate = createCardTemplate(name, phone, email);

           $root.innerHTML += cardTemplate; 
        });

        

    } catch (e) {
        alert(e.message)
    }
}

renderUsers();