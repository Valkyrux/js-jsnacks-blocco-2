// liste nomi e cognomi
userFirstNames = ["Fulvio", "Francesco", "Fabio", "Giandomenico", "Salvatore", "Daniele", "Chiara", "Elisabetta", "Elisa", "Miriam", "Giovanna"];
userLastNames = ["Barilla", "Ferrero", "De Cecco", "Vinciguerra", "Cognomeacaso", "Nessunidea", "Tantoperriempire", "Ebbastadai"];
// funzione che calcola la combinazione di due array, estraendo elementi casuali, escludendo i doppioni
function getFullNames (firstNames, lastNames, numberofFullnames) {
    let listOfFullNames = [];
    // il numero di elementi da generare può variare, imposto un valore massimo per fare bloccare il prima il ciclo
    let numOfIteration = 0;
    if (numberofFullnames <= firstNames.length * lastNames.length && numberofFullnames > 0) {
        numOfIteration = numberofFullnames;
    } else if (numberofFullnames > firstNames.length * lastNames.length) {
        numOfIteration = firstNames.length * lastNames.length;
    }
    let i = 0;
    while (i < numOfIteration) {
        const randFirstNameIndex = getRandom(firstNames.length);
        const randLastNameIndex = getRandom(lastNames.length);
        const aFullName = firstNames[randFirstNameIndex] + " " + lastNames[randLastNameIndex];
        if(!(listOfFullNames.includes(aFullName))) {
            listOfFullNames.push(aFullName);
            i++;
        }
    }
    return listOfFullNames;
}
// funzione che genera un numero random da 0 a maxNumber
function getRandom (maxNumber) {
    return Math.floor(Math.random()*maxNumber);
}
// inserire l'input
let numberOfGuest = parseInt(prompt("Inserisci il numero di invitati da generare"));
while (isNaN(numberOfGuest)) {
    numberOfGuest = parseInt(prompt("Inserisci il numero di invitati da generare"));
}
// stampare il risultato
console.log(getFullNames(userFirstNames, userLastNames, numberOfGuest));

