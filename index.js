const tempInput = document.getElementById("tempInput");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;
function convert(){
    temp = Number(tempInput.value);
    if(toF.checked){
        temp = temp*9/5 +32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toC.checked){
        temp = 5/9*(temp - 32);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "You have to select an unit";
    }
}