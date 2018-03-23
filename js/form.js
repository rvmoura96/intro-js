var addBottom = document.querySelector("#adicionar-paciente");
addBottom.addEventListener("click", function (event){
event.preventDefault();
var form = document.querySelector("#form-adiciona");
var patient = getFormInfo(form);
var errors = validatePatient(patient);

if(errors.length > 0){
    showErrorMessage(errors);
    return;
}

addPatient(patient);

form.reset();
var errorMessages = document.querySelector("#error-messages")
errorMessages.innerHTML = "";
});

function addPatient(patient){
    var patientTr = createTr(patient);
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);
}

function showErrorMessage(errors){
    var ul = document.querySelector("#error-messages");
    ul.innerHTML = "";
    errors.forEach(function(error){
        var li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    });
}

function getFormInfo(form){
    var patient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
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
    var nameTd = createTd(patient.nome, "info-nome");
    var weightTd = createTd(patient.peso, "info-peso");
    var heightTd = createTd(patient.altura, "info-altura");
    var fatnessTd = createTd(patient.gordura, "info-gordura");
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

    if(patient.nome == 0){
        errors.push("O nome não pode ser em branco");
    }
    if(!validateWeight(patient.peso)){
        errors.push("Peso Inválido");
    }
    if(!validateHeight(patient.altura)){
        errors.push("Altura Inválida");
    }
    if(patient.gordura.length == 0){
        errors.push("Gordura não pode ser em branco");
    }
    if(patient.peso.length == 0){
        errors.push("O peso não pode ser em branco");
    }
    if(patient.altura.length == 0){
        errors.push("A altura não pode ser em branco");
    }
    return errors;
}

