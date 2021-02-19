// richiesta kilometri da percorrere

var km;
km = prompt("Quanti chilometri percorrerai?");
console.log(km);

// età passeggero

var anni;
anni = prompt("Quanti anni hai?");
console.log(anni);

// prezzo base viaggio

const prezzoKm = 0.21;

var prezzoBase;
prezzoBase = km * prezzoKm; 
console.log(prezzoBase);

// sconto

var prezzoUnder;
prezzoUnder = prezzoBase - prezzoBase * 20 / 100;
console.log(prezzoUnder);

var prezzoOver;
prezzoOver = prezzoBase - prezzoBase * 40 / 100;
console.log(prezzoOver);

// istruzione condizionale 

if (anni <= 18) {
    document.getElementById("costo_biglietto").innerHTML = "Costo biglietto scontato Under18 " + "€" + prezzoUnder.toFixed(2);
} 
else if (anni >= 65) {
    document.getElementById("costo_biglietto").innerHTML = "Costo biglietto scontato Over65 " + "€" + prezzoOver.toFixed(2);
}
else {
    document.getElementById("costo_biglietto").innerHTML = "Costo biglietto Totale " + "€" + prezzoBase.toFixed(2);
}
