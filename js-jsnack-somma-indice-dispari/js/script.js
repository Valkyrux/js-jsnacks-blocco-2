// generatore di un array di numeri casuali tra minValue e maxValue con lunghezza arrayLength
function getRandArray(minValue, maxValue, arrayLength) {
    const randArray = [];
    for(let i = 0; i < arrayLength; i++) {
        randArray.push(Math.floor(Math.random()*(maxValue - minValue + 1) + minValue));
    }
    return randArray;
}
// sommatore di indici dispari di un array
function sumOddInArray(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(i % 2) {
            sum += array[i];
        }
    } 
    return sum;
}
// input utente
let chosedLength = parseInt(prompt("inserisci la lunghezza dell array che vuoi generare"));
let chosedMinValue = parseInt(prompt("inserisci il numero minimo che deve essere contenute nell'array"));
let chosedMaxValue = parseInt(prompt("inserisci il numero massimo che deve essere contenute nell'array"));
// stampo il risultato
console.log("L'array generato é:", getRandArray(chosedMinValue, chosedMaxValue, chosedLength));
console.log("La somma degli indici dispari fa:", sumOddInArray(getRandArray(chosedMinValue, chosedMaxValue, chosedLength)));