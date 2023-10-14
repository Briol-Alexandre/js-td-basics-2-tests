/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus
                    /*const jUn = 89;
                    const jD = 120;
                    const jT = 103;
                    const mUn=116;
                    const mD=94;
                    const mT=123;
                    const moyenneJohn=(jUn+jD+jT)/3;
                    const moyenneMike=(mUn+mD+mT)/3;
                    if (moyenneJohn<moyenneMike){
                        console.log(`L'équipe de Mike gagne avec sa moyenne de ${moyenneMike}`);
                    }else if (!moyenneJohn<moyenneMike){
                        console.log(`L'équipe de John gagne avec sa moyenne de ${moyenneJohn}`);
                    }else if (moyenneJohn===moyenneMike){
                        console.log(`Les deux equipes sont ex-æquo avec leurs moyenne de ${moyenneJohn}`)
                    }*/

// avec bonus
const jUn = 89;
const jD = 120;
const jT = 103;
const mUn=116;
const mD=94;
const mT=123;
const maUn=97;
const maD=134;
const maT=105;

const moyenneJohn=(jUn+jD+jT)/3;
const moyenneMike=(mUn+mD+mT)/3;
const moyenneMary =(maUn+maD+maT)/3;

if (moyenneJohn>moyenneMike && moyenneJohn>moyenneMary){
    console.log(`L'équipe de John gagne avec sa moyenne de ${moyenneJohn}`);
}else if (moyenneJohn<moyenneMike && moyenneMary<moyenneMike){
    console.log(`L'équipe de Mike gagne avec sa moyenne de ${moyenneMike}`);
}else if (moyenneJohn===moyenneMike){
    console.log(`Les équipes de Mike et de John sont ex-æquo avec leurs moyenne de ${moyenneJohn}`);
}else if (moyenneMary>moyenneMike && moyenneMary>moyenneJohn){
    console.log(L`équipe de Mary gagne avec sa moyenne de ${moyenneMary}`);
}else if (moyenneMary===moyenneMike===moyenneJohn){
    console.log(`Les 3 équipes sont à ex-æquo avec une moyenne de ${moyenneMary}`);
}else if (moyenneMary===moyenneMike){
console.log(`Les équipes de Mike et de Mary sont ex-æquo avec leurs moyenne de ${moyenneMike}`);
}else if (moyenneMary===moyenneJohn){
console.log(`Les équipes de John et de Mary sont ex-æquo avec leurs moyenne de ${moyenneJohn}`);
}

