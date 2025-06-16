// Menge als Variable
const amount1 = 600;
const amount2 = 200;
const amount3 = 400;


// Einfügen des Variablenwerts in die Tabelle mit document.getElementById
document.getElementById('ingredients1').textContent = amount1;
document.getElementById('ingredients2').textContent = amount2;
document.getElementById('ingredients3').textContent = amount3;


// Funktion zum Auslesen und Berechnen des Variblenwerts und der Eingabe in das Inputfeld nach Portionen mit document.getElementById
function calculatePortion() {
    document.getElementById("ingredients1").innerHTML = (amount1) / 4 * +itemamount.value;
    document.getElementById("ingredients2").innerHTML = (amount2) / 4 * +itemamount.value;
    document.getElementById("ingredients3").innerHTML = (amount3) / 4 * +itemamount.value;
}