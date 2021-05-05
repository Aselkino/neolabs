// console.log('DOM WORKING');

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM WORKING");

    const $root = document.getElementById('root');

    // 5MG local storage - память 
    // const user = localStorage.getItem('auth')
    const user = JSON.parse(localStorage.getItem('auth'));

    // $root.innerHTML = `
    //     <p> Name: ${user.name} </p>
    //     <p> Role: ${user.role}</p>
    // `;
    console.log(user)

    setTimeout(function() {
        localStorage.clear();
    }, 3000);
});

