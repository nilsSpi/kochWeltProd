let prev_val = 4;

/*/(\d+)/*/
function seperateNumberAndUnit(string) {
    let str = string;
    let matches = str.match(/\d+\.?\d*/);
    let number;
    let unit;

    if (matches) {
        number = matches[0];
        unit = string.slice(number.length);

    }
    else { number = string; }
    return [number, unit];
}




function calc() {
    let input = document.getElementById('input-nils').value;
    if (input <= 0) {
        alert("Bitte geben Sie eine natürliche Zahl grösser 0 an :) ");
        input.value = 4;
        return
    }
    const länge = document.getElementsByClassName('unit').length;
    for (let i = 0; i < länge; i++) {
        let iter_eintrag = document.getElementById(i).innerHTML;
        let seperated = seperateNumberAndUnit(iter_eintrag);
        let rightNumber = seperated[0] * 1 / prev_val * input;
        document.getElementById(i).innerHTML = `${rightNumber}${seperated[1]}`;
    }
    prev_val = input;
}


function showDrinks(){
    let drinksContainer=document.getElementById('drinksContainer');
    let drinksButton=document.getElementById('drinks-btn');
    drinksContainer.classList.remove('opa-zero');
    drinksButton.classList.add('opa-zero');

}

 function hideDrinks(){
     let drinksContainer=document.getElementById('drinksContainer');
     let drinksButton=document.getElementById('drinks-btn');
     drinksContainer.classList.remove('opa-one');
     drinksContainer.classList.add('opa-zero');
     drinksButton.classList.add('opa-one');
     drinksButton.classList.remove('opa-zero');

 }