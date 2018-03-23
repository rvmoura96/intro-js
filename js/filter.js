var filterCamp = document.querySelector('#table-filter');

filterCamp.addEventListener('input',function(){
    var patients = document.querySelectorAll('.paciente');
    if(this.value.length > 0 ){
        patients.forEach(function(patient) {
            var nameTd = patient.querySelector('.info-nome');
            var name = nameTd.textContent;
            var exp = new RegExp(filterCamp.value,"i");
            if(!exp.test(name)){
                patient.classList.add('hide');
            } else {
                patient.classList.remove('hide');
            }
        })
    } else {
        patients.forEach(function(patient){
            patient.classList.remove('hide');
        })
    }

});
