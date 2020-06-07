function pose_question(){
    var reponse = confirm("Voulez-vous continuer ?");
    test_reponse(reponse);
}

function test_reponse(reponse){
    alert("Nous sommes dans la fonction test_reponse. La réponse saisie dans la fonction pose_quesiton est :"+reponse)
}

pose_question();