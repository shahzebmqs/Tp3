function etudiant(nom,prenom,classe,age)
{
    this.nom=nom;
    this.prenom=prenom;
    this.classe=classe;
    this.age=age;
}
var etudiant1 = new etudiant("alpha","beta","E3FIC",22);
var etudiant2 = new etudiant("charlie","delta","E3FIC",19);
var etudiant3 = new etudiant("gamma","omega","E3FIC",27);

var matiere = prompt("Veuillez choisir une matiere parmi 1-Maths, 2-Info, 3-Chimie");
console.log(matiere);

if(matiere==1)
{
    matiere+="- Maths";
}
else if(matiere==2)
{
    matiere+="- Info";
}
else if(matiere==3)
{
    matiere+="- Chimie"
}
alert("Vous avez choisis : " +matiere);

var nbr_notes = prompt("Veuillez choisir le nombre de notes");
var i=0;
var notes=[];
while(i<nbr_notes)
{
    notes[i] = prompt("Saissisez toutes vos notes !!!");
    i++;
}
function Calculmoyenne(notes){
    var somme=[];
    var moyenne=0.0;
    var j;
        for(j=0;j<notes.length,j++;)
        {
            somme+=notes[j];
        }
    moyenne=somme/j;
    return moyenne;
}
var moyEtudiant1 = alert(Calculmoyenne(notes));
etudiant1.moyenne= moyEtudiant1;
console.log(etudiant1);
console.log(notes);
console.log(somme);
