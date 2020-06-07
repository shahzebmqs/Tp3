function Voiture(marque,modele,annee)
{
    this.marque=marque;
    this.modele=modele;
    this.annee=annee;
}
var maVoiture= new Voiture("Peugeot",207,2007);
alert(maVoiture.marque+" "+maVoiture.modele+" "+maVoiture.annee);