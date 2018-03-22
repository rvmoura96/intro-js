var addBottom = document.querySelector("#adicionar-paciente");
addBottom.addEventListener("click", function (event){
event.preventDefault();
var form = document.querySelector("#form-adiciona");
var patient = getFormInfo(form);
var patientTr = createTr(patient);
var error = validatePatient(patient);


if(errors.length > 0){
    var errorMsg = document.querySelector("#error-message")
    errorMsg.textContent = error;
    return;
}
var table = document.querySelector("#tabela-pacientes");
table.appendChild(patientTr);
form.reset();
});


function getFormInfo(form){
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fatness: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    }
    return patient;
}

function createTd(info, classParam){
    var td = document.createElement("td")
    td.textContent = info;
    td.classList.add(classParam);

    return td;

}

function createTr(patient){
    var patientTr = document.createElement("tr");
    var nameTd = createTd(patient.name, "info-nome");
    var weightTd = createTd(patient.weight, "info-peso");
    var heightTd = createTd(patient.height, "info-altura");
    var fatnessTd = createTd(patient.fatness, "info-gordura");
    var imcTd = createTd(patient.imc, "info-imc");
    
    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatnessTd);
    patientTr.appendChild(imcTd);
    patientTr.classList.add("paciente");

    return patientTr;
}

function validatePatient(patient){
    var errors = [];

    if(!validateWeight(patient.weight)){
        errors.push("Peso Inválido");
    }
    if(!validateHeight(patient.height)){
        errors.push("Altura Inválida");
    }
    return errors
}

