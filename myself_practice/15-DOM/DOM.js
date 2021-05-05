function init() {
    var par = document.getElementById('code1');
    par.innerHTML = 'здесь был параграф'

    var myClass = document.getElementsByClassName('some');

    console.log(par.innerHTML);
    console.log(myClass);

    par.setAttribute("class", "redtext");

    var scoop = document.getElementById("code11");
    var altText = scoop.getAttribute("alt");

    console.log(altText)
    }
window.onload = init;