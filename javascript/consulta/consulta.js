//recomte de vots.
var contSiSi = 0;
var contSiNo = 0;
var contNoNo = 0;
//boolean per sortir del bucle.
var preguntant = true;
//Variable per mostrar només un missatge.
var majoria = "";


while (preguntant) { //Posem la variable que farà sortir del loop quan no es vulgui seguir responent.
    var consulta = prompt("Vol que Catalunya esdevingui un Estat?");
    if (consulta.toUpperCase() !== "SI" && consulta.toUpperCase() !== "NO") {
        break;
    }
    var consultaDos = prompt("En cas afirmatiu, vol que aquest Estat sigui independent?");
    if (consultaDos.toUpperCase() !== "SI" && consultaDos.toUpperCase() !== "NO") {
        break;
    }
    if (consulta.toUpperCase() === "SI" && consultaDos.toUpperCase() === "SI") {
        contSiSi += 1;

    } else if (consulta.toUpperCase() === "SI" && consultaDos.toUpperCase() === "NO") {
        contSiNo += 1;
    } else if (consulta.toUpperCase() === "NO" && consultaDos.toUpperCase() === "NO") {
        contNoNo += 1;
    } else {
        preguntant = false;
    }
}
//Mostrem només el missatge amb més vots.
majoria = Math.max(contSiSi, contSiNo, contNoNo);
if (contSiSi === 0 && contSiNo === 0 && contNoNo === 0)
    document.write("Empat a vots! (segurament no hi ha hagut vots!)<br/>");
else if (contSiSi == contSiNo && contSiSi == contNoNo)
    document.write("Empat a vots!<br/>");
else if (majoria == contSiNo)
    document.write("Vols un estat federal <br/>");
else if (majoria == contSiSi)
    document.write("Vols la independència de Catalunya <br/>");
else {
    document.write("Vols continuar fomant part d'Espanya <br/>");
}

//Mostrem el recompte.
document.write("Cas SiSi: " + contSiSi + " vegades.<br/> Cas SiNo: " + contSiNo + " vegades.<br/> Cas NoNo: " + contNoNo + " vegades.");


