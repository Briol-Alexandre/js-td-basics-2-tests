// Jour suivant

/*
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/
const day =prompt('Quel jour sommes-nous ?');
if (day==='mercredi'){
    console.log('Demain, nous serons jeudi');
}else if(day==='jeudi'){
    console.log('Demain, nous serons vendredi');
}else if(day==='vendredi'){
    console.log('Demain, nous serons samedi');
}else if (day==='samedi'){
    console.log('Demain, nous serons dimanche');
}else if (day==='dimanche'){
    console.log('Demain, nous serons lundi');
}else if (day==='lundi'){
    console.log('Demain, nous serons mardi');
}else if (day==='mardi'){
    console.log('Demain, nous serons mercredi');
}else if (day !== 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'){
    console.log('Erreur : Jour non reconnu !');
}
