var marque = prompt("Quel est la marque ?");
var conso_moyenne = prompt("Quel est la conso moyenne ?");
var prix_litre = prompt("Quel est le prix du litre ?");
var nb_km = prompt("Quel est le nombre de km à effectuer ?");
var tot = (nb_km/100)*conso_moyenne*prix_litre;
alert(nb_km+"km, "+marque+" = marque, " +conso_moyenne+"litre au 100, "+prix_litre+"est le prix du litre, "+tot+" est le total");