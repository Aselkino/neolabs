var access = document.getElementById('code7');
var code = access.innerHTML;

access.innerHTML = 'were p';
document.body.style.background = "yellow";
setTimeout(() => document.body.style.background = "green", 5000);

alert(code);
