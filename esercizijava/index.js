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


//esercizio 9 
let word;
do {
    word = prompt("Inserisci una parola di 5 lettere");
} while(word.length = 5);
console.log(word);
console.log(length);
*/

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