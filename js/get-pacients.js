var button = document.querySelector("#buscar-pacientes");

button.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })
})