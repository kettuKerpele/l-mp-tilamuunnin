var numberInput = document.getElementById("number")
var sendWarning = document.getElementById("warnings");
var button = document.getElementById("submit");

button.addEventListener("click", checkNumbers);

function checkNumbers(event) {
    var x = document.forms["fields"]["givenInput"].value;
    if(x == "" || x == null || x == ".") {
    document.getElementById("warnings").innerHTML = "Lisää luku.";
    numberInput.value ='';
    return false;
    } else {
    var numbers = /^[0-9]*\.?[0-9]*$/;
    if(numberInput.value.match(numbers)) {
    document.getElementById("warnings").innerHTML = "Tulokset:";
    absolute()
    cToF()
    fToC()
    return true;
    } else {
    document.getElementById("warnings").innerHTML = "Käytä vain numeroita (erota desimaalit pisteellä)";
    numberInput.value ='';
    }
  }
}

function absolute() {
    if(numberInput.value == 273.15 || numberInput.value == 459.67) {
    document.getElementById("absz").innerHTML = "Absoluuttinen nollapiste -273.15&degC tai -459.67&degF";
    document.getElementById("absz").style="background-color:#02A4D3"; 
    } else {
    document.getElementById("absz").style.display = "none";
    }
}

function cToF() {
    var calculateCtoF = (numberInput.value*1.8) + 32;
    var twoDec = calculateCtoF.toFixed(2);
    document.getElementById("posResult").innerHTML = numberInput.value + " celsiusastetta on: "+ twoDec + " fahrenheit astetta";
    document.getElementById("posResult").style="background-color:lightpink";    

    let xx = numberInput.value;
    xx = -xx;
    var negativeCtoF = (xx*1.8) + 32;
    var twoDecNeg = negativeCtoF.toFixed(2);
    document.getElementById("negResult").innerHTML = xx + " celsiusastetta on: "+ twoDecNeg + " fahrenheit astetta";
    document.getElementById("negResult").style="background-color:lightblue";
}

function fToC() {
    var a = numberInput.value - 32;
    var b = a * 5;
    var c = b / 9;
    var final = c;
    var twoDec2 = final.toFixed(2);
    document.getElementById("posResult1").innerHTML = numberInput.value + " fahrenheit astetta on: "+ twoDec2 + " celsiusastetta";
    document.getElementById("posResult1").style="background-color:lightpink";

    let z = numberInput.value;
    z = -z;
    var aa = z -32;
    var bb = aa * 5;
    var cc = bb / 9;
    var negativeFtoC = cc;
    var negFtoC = negativeFtoC.toFixed(2);
    document.getElementById("negResult2").innerHTML = z + " fahrenheit astetta on: "+ negFtoC + " celsiusastetta";
    document.getElementById("negResult2").style="background-color:lightblue";
    numberInput.value ='';
}

 