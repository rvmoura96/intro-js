var button = document.querySelector("#buscar-pacientes");

button.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        var ajaxError = document.querySelector("#ajax-error");
        if( xhr.status == 200){
            ajaxError.classList.add('hide');
            var res = xhr.responseText;
            var patients = JSON.parse(res);
    
            patients.forEach( function(patient){
                addPatient(patient);
            });
        } else {
            console.log("Requisição falhou, status: "+ xhr.status);
            console.log("Resposta: "+ xhr.responseText);
            ajaxError.classList.remove('hide');
            ajaxError.classList.add('error-message');
        }

     });
});