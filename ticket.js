// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const prezzoKm = 0.21;
// 1) chiedere numero km
let distanza = prompt("Quanti chilometri devi percorrere?");
console.log(distanza);

// 2) chiedere età passeggero
let age = prompt("Quanti anni hai?");
console.log(age);

// 3) calcolare prezzo biglietto
let price = distanza * prezzoKm;

// condizioni
if (age >= 18 && age <= 65) {
    alert (price.toPrecision (3));

} else if (age < 18) {
// 4) IF minorenne sconto 20%
    let price = price - ((price / 100) * 20);
    alert (price.toPrecision(3));
} else {
// 5) IF over65 sconto 40%
    let price = price - ((price/100)*40);
    alert (price.toPrecision(3));
}


