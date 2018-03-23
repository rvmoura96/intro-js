var patients = document.querySelectorAll(".paciente");
var table = document.querySelector('table');

table.addEventListener('dblclick', function(event){
    var target = event.target;
    var parent = target.parentNode;
    parent.classList.add('fadeOut');
    setTimeout(function(){
        parent.remove();
    }, 500);
});
