// Menge als Variable
const amount1 = 600;
const amount2 = 1;
const amount3 = 1;
const amount4 = 1;
const amount5 = 1;
const amount6 = 50;
const amount7 = 2;
const amount8 = 300;
const amount9 = 400;
const amount10 = 100;
const amount11 = 1;
const amount12 = 1;

// Einfügen des Variablenwerts in die Tabelle mit document.getElementById
document.getElementById('ingredients1').textContent = amount1;
document.getElementById('ingredients2').textContent = amount2;
document.getElementById('ingredients3').textContent = amount3;
document.getElementById('ingredients4').textContent = amount4;
document.getElementById('ingredients5').textContent = amount5;
document.getElementById('ingredients6').textContent = amount6;
document.getElementById('ingredients7').textContent = amount7;
document.getElementById('ingredients8').textContent = amount8;
document.getElementById('ingredients9').textContent = amount9;
document.getElementById('ingredients10').textContent = amount10;
document.getElementById('ingredients11').textContent = amount11;
document.getElementById('ingredients12').textContent = amount12;

// Funktion zum Auslesen und Berechnen des Variblenwerts und der Eingabe in das Inputfeld nach Portionen mit document.getElementById
function calculatePortion() {
    document.getElementById("ingredients1").innerHTML = (amount1) / 4 * +itemamount.value;
    document.getElementById("ingredients2").innerHTML = (amount2) / 4 * +itemamount.value;
    document.getElementById("ingredients3").innerHTML = (amount3) / 4 * +itemamount.value;
    document.getElementById("ingredients4").innerHTML = (amount4) / 4 * +itemamount.value;
    document.getElementById("ingredients5").innerHTML = (amount5) / 4 * +itemamount.value;
    document.getElementById("ingredients6").innerHTML = (amount6) / 4 * +itemamount.value;
    document.getElementById("ingredients7").innerHTML = (amount7) / 4 * +itemamount.value;
    document.getElementById("ingredients8").innerHTML = (amount8) / 4 * +itemamount.value;
    document.getElementById("ingredients9").innerHTML = (amount9) / 4 * +itemamount.value;
    document.getElementById("ingredients10").innerHTML = (amount10) / 4 * +itemamount.value;
    document.getElementById("ingredients11").innerHTML = (amount11) / 4 * +itemamount.value;
    document.getElementById("ingredients12").innerHTML = (amount12) / 4 * +itemamount.value;
};

