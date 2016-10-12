var caresDau = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];
var resultatCara = [tirarDau];
var tirarDau;
const trucat = 0.5;
var contadors = [0, 0, 0, 0, 0, 0];
var desequilibrat;

function getRandom(min, max) {
    return Math.random() * 6 + 1;
}
while (isNaN(tirarDau)) {
    tirarDau = prompt("Quantes vegades vols que es tiri el dau?");
}
for (var i = 0; i < tirarDau; i++) {
    resultatCara[i] = getRandom(0, 6);
}
while (isNaN(desequilibrat)) {
    desequilibrat = prompt("Quina cara del dau vols que estigui desequilibrada?");
}
if (desequilibrat == 1){
    caresDau[1]+=trucat;
}
else if (desequilibrat!= 6){
    caresDau[desequilibrat-1] += trucat;
}
else{
    caresDau[5]-=trucat;
    
}

for (var j = 0; j < resultatCara.length; j++) {
    //document.write(resultatCara[j] + "<br />");
   if (resultatCara[j] >= caresDau[0] && resultatCara[j] < caresDau[1]) {
        contadors[0] += 1;
    } else if (resultatCara[j] >= caresDau[1] && resultatCara[j] < caresDau[2]) {
        contadors[1] += 1;
    } else if (resultatCara[j] >= caresDau[2] && resultatCara[j] < caresDau[3]) {
        contadors[2] += 1;
    } else if (resultatCara[j] >= caresDau[3] && resultatCara[j] < caresDau[4]) {
        contadors[3] += 1;
    } else if (resultatCara[j] >= caresDau[4] && resultatCara[j] < caresDau[5]) {
        contadors[4] += 1;
    } else {
        contadors[5] += 1;
    }
}
document.write("(1): " + 'X'.repeat(contadors[0]) + "<br />" + "(2): " + 'X'.repeat(contadors[1]) + "<br />" + "(3): " + 'X'.repeat(contadors[2]) + "<br />" + "(4): " + 'X'.repeat(contadors[3]) + "<br />" + "(5): " + 'X'.repeat(contadors[4]) + "<br />" + "(6): " + 'X'.repeat(contadors[5]) + "<br />");