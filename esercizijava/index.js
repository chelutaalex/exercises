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
   

//esercizio 17 e 18 e 19 e 20 e 21
let person = {
    name : "Carlo",
    age : 24,
    city : "Roma",
} ;

 //   person.job = "Barbiere";
  //  person.age = 30;
  //  console.log(person.job);

    for(key in person ){
        
        console.log(key);
        console.log(person[key]);
        
    }
         

  //  esercizio 22 e 23

  function outerFunction (x, initialValue) {
    let result = initialValue;
    function innerFunction(y) {
        return result += y;
    }
    return innerFunction;
  }

console.log(outerFunction(5, 7)(8));


//esercizio 24

function createCounter() {
    let count = 0;
    return {
        increment : function(){
            count++;
            return count;
        },
        decrement : function(){
            count--
            return count;
        }
    }
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());


//esercizio 24 e 25 e 26
let student = {
    name : "Carlo",
    age : 23,
    grade : 2, 
    school : "primary"
}

console.log(Object.entries(student))


//esercizio 27

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(element => console.log(element*2));

const squaredNumbers = numbers.map((x) => x * x);
console.log(squaredNumbers);



//esercizio 28

let students = [name = "Michele", grade = 60];

let passedStudents = students.filter((studentGrade) => grade >= 60);
let nonPassed = students.find((element) => grade < 60);

console.log(nonPassed);
console.log(passedStudents);

*/

//esercizio 29 reduce & sort

let expenses = [21, 40, 182];
let words = ["banana", "apple", "cherry","date"]

const sommaSpese = expenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
);

words.sort();

console.log(words);
console.log(sommaSpese);