/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/
const prix=prompt('Quel est le montant de vos achats ?');
switch (prix){
    case prix<=25:
        console.log(`Le montant de vos achats s'élève à ${prix}€, merci !`);
        break;
    case prix>25:
        const rist =prix/10;
        const prixFinal=prix-rist ;
        console.log(`Le montant de vos achats s'élève à ${prix}€, vous avez droit à une remise de ${rist}  merci !`);
        break;

    case rist>5:
        const verse=rist/10;
        console.log(`Le montant de vos achats s'élève à ${prix}€, vous avez droit à une remise de ${rist}, ${verse}€ ont été versé au Resto Du Coeur, merci !`);

}