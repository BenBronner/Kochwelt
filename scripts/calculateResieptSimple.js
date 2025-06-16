// Funktion zum Auslesen und Berechnen des Variblenwerts und der Eingabe in das Inputfeld nach Portionen mit document.getElementById
function calculatePortion() {
    document.getElementById("quantity1").innerHTML = (5) * +quantity.value;
    document.getElementById("quantity2").innerHTML = (2.5) * +quantity.value;
    document.getElementById("quantity3").innerHTML = (1) * +quantity.value;
    document.getElementById("quantity4").innerHTML = (4.5) * +quantity.value;
    document.getElementById("quantity5").innerHTML = (250) * +quantity.value;
};
