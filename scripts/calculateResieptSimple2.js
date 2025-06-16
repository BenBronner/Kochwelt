// Funktion zum Auslesen und Berechnen des Variblenwerts und der Eingabe in das Inputfeld nach Portionen mit document.getElementById
function calculatePortion() {
    document.getElementById("quantity1").innerHTML = ((1.20) / 4 * +quantity.value).toFixed(1);
    document.getElementById("quantity2").innerHTML = ((300) / 4 * +quantity.value);
    document.getElementById("quantity3").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity4").innerHTML = ((2) / 4 * +quantity.value);
    document.getElementById("quantity5").innerHTML = ((300) / 4 * +quantity.value);
    document.getElementById("quantity6").innerHTML = ((300) / 4 * +quantity.value);
    document.getElementById("quantity7").innerHTML = ((150) / 4 * +quantity.value);
    document.getElementById("quantity8").innerHTML = ((200) / 4 * +quantity.value);
    document.getElementById("quantity9").innerHTML = ((150) / 4 * +quantity.value);
    document.getElementById("quantity10").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity11").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity12").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity13").innerHTML = ((0.5) / 4 * +quantity.value).toFixed(1);
    document.getElementById("quantity14").innerHTML = ((0.5) / 4 * +quantity.value).toFixed(1);
    document.getElementById("quantity15").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity16").innerHTML = ((1) / 4 * +quantity.value);
    document.getElementById("quantity17").innerHTML = ((100) / 4 * +quantity.value);
    document.getElementById("quantity18").innerHTML = ((4) / 4 * +quantity.value);
};
