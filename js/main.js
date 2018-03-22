var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";
var Patients = document.querySelectorAll(".paciente");

for(var i = 0 ; i < Patients.length ; i++){

    var patient = Patients[i];
    
    var tdWeight = patient.querySelector(".info-peso");
    var weight = tdWeight.textContent;
    
    var tdHeight = patient.querySelector(".info-altura");
    var height = tdHeight.textContent;
    
    var tdImc = patient.querySelector(".info-imc"); 
    
    var isWeight = validateWeight(weight);
    var isHeight = validateHeight(height);
    
    if(!isWeight){
        console.log("peso inválido");
        isWeight = false;
        tdImc.textContent = "Peso Inválido";
        patient.classList.add("invalid-patient")
    }
    
    if(!isHeight){
        console.log("altura inválida");
        isHeight = false;
        tdImc.textContent = "Altura Inválido";
        patient.classList.add("invalid-patient")
    }
    
    if(isWeight && isHeight){
        var imc = calcIMC(weight, height); 
        tdImc.textContent = imc;
    }
}

function calcIMC(weight, height){
    var imc = weight/Math.pow(height,2);
   
    return imc.toFixed(2);
}

function validateWeight(weight){
    if(weight >= 0 && weight < 1000){
        return true;
    } else{
        return false;
    }
}

function validateHeight(height){
    if(height >= 0 && height <= 3.0){
        return true;
    }else{
        return false;
    }
}