var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var testPatient = document.querySelectorAll(".paciente");
console.log(testPatient);
for(var i = 0 ; i < testPatient.length ; i++){
    
    var patient = testPatient[i];

    var tdWeight = patient.querySelector(".info-peso");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-altura");
    var height = tdHeight.textContent;

    var tdImc = patient.querySelector(".info-imc"); 

    var isWeight = true;
    var isHeight = true;

    if(weight <= 0 || weight >= 1000){
        console.log("peso inválido");
        isWeight = false;
        tdImc.textContent = "Peso Inválido";
        patient.classList.add("invalid-patient")
    }

    if(height <= 0 || height >= 3.0){
        console.log("altura inválida");
        isHeight = false;
        tdImc.textContent = "Altura Inválido";
        patient.classList.add("invalid-patient")
    }

    if(isWeight && isHeight){
        var imc = weight/Math.pow(height,2);
        
        tdImc.textContent = imc.toFixed(2);
    }
}
