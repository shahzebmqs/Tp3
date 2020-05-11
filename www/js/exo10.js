var val_commande = prompt("Saisissez le montant de la commande")
var reduction

if(val_commande<10000)
    reduction = 0
else if(val_commande<25000)
    reduction = (val_commande/100)*5
else
    reduction = (val_commande/100)*10

    alert("Le montant de la réduction pour une commande de : "+val_commande+" euros  est de : "+reduction+" euros")