/*esercizio 1 e 2 javascript
const variabile2 = "Mondo";

variabile1 = "Ciao" ;
console.log(variabile1);
console.log(variabile2);

//esercizio 3 
let number = 5; 
{
    let number = 14;
    console.log(number);
}

console.log(number);

//esercizio 4 
let outside = 10;
{
    let inside = 20;
    console.log(outside);
    console.log(inside);
}
console.log(outside);
console.log(inside);


//esercizio 5
for(i = 0; i <= 20; i += 2){
    console.log(i);
}



//esercizio 6
let i = 10;

while(i>0) {
    if( i % 2 != 0){
        console.log(i);
    }
    i--;
} 


//esercizio 7 e 8

let word = prompt('Inserisci una parola');
console.log(word.length);


//esercizio 10
let number = 8;
if (number < 5) {
    console.log("Numero minore di 5")
} else {
    console.log("Numero maggiore di 5")
}


//esercizio 11
let score;
score = prompt("Inserisci il voto");
if (score > 90){
    console.log("Voto ottimo");
} else if (score > 70) {
    console.log("voto buono");
} else if (score > 60) {
    console.log("voto sufficiente");
} else if (score <= 59) {
    console.log("voto insufficiente");
}


//esercizio 12 
let score;
score = prompt("Inserisci il voto");
switch (true) {
    case score > 0 && score < 59: 
    console.log("voto insufficiente");
    break;

    case score > 60 && score < 69:
    console.log("voto sufficiente");
    break;

    case score > 70 && score < 89:
    console.log("voto buono");
    break;

    case score > 90 && score < 100:
    console.log("Voto ottimo");
    break;

    default:
    console.log("voto errato");
}



//esercizio 13 e 14 
let array = [1, 2, 3, 4, 5];
let somma = 0;
for(let i = 0; i < array.length; i++){
    somma = somma + array[i];
}

console.log(somma);


//esercizio 15
let array = [1, 2, 3, 4, 5];
let counter = 0;
for(i = array.length; i > 0; i--){
    array[counter] = i;
    counter = counter + 1;
}
console.log(array);


//esercizio 9 
let word;
do {
    word = prompt("Inserisci una parola di 5 lettere");
} while(word.length < 5);
console.log(word);
console.log(length);

*/

//eserciaio 16
let parole = [];
for(let i = 0; i < 5; i++){
    let parola = prompt("Inserisci una parola");
    parole.push(parola);
}

for(i = 0; i < parole.length; i++){
    if(parole[i].length % 2 != 0 ){
        console.log(parole[i]);
    }
}