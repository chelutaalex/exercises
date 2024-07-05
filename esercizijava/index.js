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



//esercizio 29 reduce & sort

let expenses = [21, 40, 182];
let words = ["banana", "apple", "cherry","date"]

const sommaSpese = expenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
);

words.sort();

console.log(words);
console.log(sommaSpese);


// esercizio 30, 31, 32, 33 , 34, 35, 36, 37, 38, 39, 40 ,41(getter) ,42 , 43, 44 , 45 automobile

class Automobile {
    marca = ""
    modello = ""
    anno = 0
    chilometraggio = 0
    #contatoreChiamate = 0

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca
        this.modello = modello
        this.anno = anno
        this.chilometraggio = chilometraggio
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio){
            return `${auto1.modello} ha un chilometraggio maggiore`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.modello} ha un chilometraggio maggiore`;
        } else {
            return `Le automobili hanno lo stersso chilometraggio`;
        }
    }

    set chilometraggio(chilometraggio) {
        if(this.chilometraggio >= chilometraggio)
            {
              return chilometraggio = this.chilometraggio;
            } else {
                return "Chilometraggio nuovo non può essere minore di prima";
            }
    }

    get chilometraggio() {
        return this.chilometraggio;
    }

    mostraContatoreChiamate() {
        return this.getContatoreChiamate();
    }

    aggiungiChilometri(km){
        this.#incrementaContatore();
        this.chilometraggio += km ; 
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    getContatoreChiamate() {
        return this.#contatoreChiamate ;
    }

    aggiungiChilometri() {
        chilometraggio = chilometraggio++;
    }

    mostraChilometraggio() {
        return chilometraggio;
    }

    descrizione() {
        return "La marca del veicolo è " + marca + "il modelllo " + modello + 
        "di anno" + anno ;
    }

    #calcolaEta() {
        return anno - Date.getFullYear();
    }
    
    mostraEta() {
        return this.#calcolaEta();
    }

    _controllaChilometri() {
        return chilometraggio ;
    }

    static varificaIstanza(obj, classe) {
        if(obj instanceof classe){
            return "obj è un istanza di classe"
        }else {
            return "obj non è un istanza di classe"
        }
    }
}

class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modello,anno ,chilometraggio ,autonomia) {
        super(marca ,modello,anno ,chilometraggio);

        this.autonomia = autonomia;
    }

    descrizione() {
        return "La marca del veicolo è " + marca + "il modelllo " + modello + 
        "di anno" + anno + "autonimoa:" +autonomia+ "km";
    }

    ricarica() {
        autonomia = autonomia++;
    }

    _controllaChilometri(chilometraggio) {
        if (chilometraggio > 100000) {
            return "Troppi km"
        }else {
            return "Meno di 100000 km"
        }
    }

}

class Camion extends Automobile {
    caricoMassimo = 0;

    constructor(marca, modello,anno ,chilometraggio , caricoMassimo) {
        super(marca ,modello,anno ,chilometraggio);

        this.caricoMassimo = caricoMassimo ;
    }

    descrizione() {
        return "La marca del veicolo è " + marca + "il modelllo " + modello + 
        "di anno" + anno + "carico massimo" + caricoMassimo;
    }

    carica() {
        if(this.caricoMassimo > caricoMassimo) {
            return "Carico massimo superato"
        } else {
            caricoMassimo = this.caricoMassimo ; 
        }
    }
}

Automobile.prototype.saluta = function() {
    return "Saluti da parte di " + marca + modello
} ;

let automobile1 = new Automobile("fiat" , "punto" , 2019 , 23000);
if(automobile1 instanceof Automobile) {
    return "automobile1 appartiene ad Automobili"
} else {
    return "automobile1 non appartiene ad Automobili"
}

let camion1 = new Camion("renault" , "camion" , 2019 , 23000 , 15000);
if(camion1 instanceof Camion) {
    return "camion1 appartiene ad camion"
} else {
    return "camion1 non appartiene ad camion"
}


//esercizio 46 ,47 , 48

let numeri = [1, 2, 3 ,4 ];
let [uno, due, tre, quattro, cinque] = numeri;

console.log(uno ,due ,tre ,quattro, cinque);



//esercizio 49 , 50

let numeri = {
    uno : 1,
    due : 2,
    tre : 3
}

let {uno: primo, due: secondo, tre:terzo} = numeri;

console.log(primo, secondo, terzo);



//esercizio 51

let macchina = {
    marca : "fiat",
    modello : "punto",
}

let{marca, modello , stato = "usata"} = macchina;

console.log(marca, modello, stato);


//esercizio 52

let numeri = [1 , 2 ,3 ,4];

let copiaNumeri = [...numeri];

console.log(copiaNumeri);

numeri[1] = 546 ;

console.log(numeri);


//esercizio 53

let numeri = [1 , 2 ,3 ,4];
let numeri2 = [5, 6, 7];

let numeriUniti = [...numeri , ...numeri2];

console.log(numeriUniti);


//esercizio 54
let macchina = {
    marca : "fiat",
    modello : "punto"
}

let copiaMacchina = {...macchina , stato : "usata"};

console.log(macchina, copiaMacchina);


//esercizio 55
let numeri = [1 , 2 ,3 ,4];
function somma(...numeri) {
    return numeri.reduce((acc,num) => acc + num,0);
}

console.log(somma(50, 70, 2));


//esercizio 56
let numeri = [1 , 2 ,3 ,4];

let [primo, secondo, ...rest] = numeri;

console.log(rest , primo , secondo);



//esercizio 57

let macchina = {
    marca : "fiat",
    modello : "punto",
    stato : "usata",
    chilometraggio : 250000
}

let {marca , modello , ...resto} = macchina;

console.log(marca , modello , resto );



//esercizio 58

let macchina = {
    marca : "fiat",
    modello : "punto",
    stato : "usata",
    chilometraggio : 250000
}

console.log(JSON.stringify(macchina));



//esercizio 59

let stringa = `{"marca" : "fiat", "modello" : "punto","stato" : "usata", "chilometraggio" : 250000}`

console.log(JSON.parse(stringa));



//esercizio 60

const jsonString = `[
    {
      "nome": "Mario",
      "cognome": "Rossi",
      "eta": 30
    },
    {
      "nome": "Luca",
      "cognome": "Bianchi",
      "eta": 25
    },
    {
      "nome": "Giulia",
      "cognome": "Verdi",
      "eta": 35
    }
  ]`;

const personeArray = JSON.parse(jsonString);
const nuovaPersona = {
  "nome": "Anna",
  "cognome": "Neri",
  "eta": 28
};
personeArray.push(nuovaPersona);
const jsonStringAggiornato = JSON.stringify(personeArray, null, 2);

console.log(jsonStringAggiornato);

*/

//esercizio 61
/*
let nome = `Alex`;
let cognome = `Cheluta`;
console.log(nome +" "+ cognome);



//esercizio 62

let nome = `Alex` , cognome = `Cheluta` , eta = 27, citta = `Verona`;
let stringa = `${nome} ${cognome} ${eta} ${citta}`;

console.log(stringa);



/*
//esercizio 64
let numero = 16344;
let stringa = "Ciao mondo";
let array = ["test esercizio"];
let obj = {
    nome : `Alex`,
    cognome : `Cheluta` ,
}

console.log(numero);
console.log(stringa);
console.log(array);
console.log(obj);



//esercizio 65

let numero = 0;

if(numero == 1) {
    console.error("la variabile ha valore 1");
} else if(numero == 0) {
    console.warn("La variabile ha valore 0");
}


//esercizio 66


let arrayDiOggetti = [obj1 = {}, obj2 = {}, obj3 = {}, obj4 = {}];
console.table(arrayDiOggetti);
console.group();
console.log("Prova esercizio");


//esercizio 67
setTimeout(function() {
    console.log("Sono passati 3 secondi")
}, 3000);



//esercizio 68

setInterval(function() {
    console.log("Sono passati 2 secondi")
}, 2000);



//esercizio 69

function prova() {
    console.log("Ciao");
}

let interval = setInterval(prova, 1000);

function clear() {
    clearInterval(interval)
    console.log("Intervallo interotto");
}

setTimeout(clear,5000);

//esercizio 63

let persona = {
    nome : "Alex",
    cognome : "Cheluta" ,
}

function stringa(persona) {
    return `${persona.nome} ${persona.cognome}`;
}

console.log(stringa(persona));


//esercizio 70

function divisione(a ,b) {
    try{
      if(b === 0) {
        throw new Error("Il divisore non può essere 0");
      }
      console.log(a / b); 
    } catch(error) {
        console.log("errore:" ,error.message);
    }
}

divisione(10 , 0);



//esercizio 71 e 72(finally)

function prova(string) {
    try {
        if(typeof string !== "string") {
            throw new TypeError("Il parametro non è una stringa");
        }
        let a = string.toUpperCase();
        if(a == false) {
            throw new Error("Errore generico");
        }
    } catch {
        if(error instanceof TypeError) {
            console.error(error.message);
        } else {
            console.error("Errore");
        }
    } finally {
        console.log("l'operazione è statra eseguita indipedentemente dal risultato");
    }
}



//esercizio 73 e 74

function basicOperation(a, b, callback) {

    const result = a + b;
  
    console.log("Risultato della somma:", result);
  
    callback(result);
  }
  
  function myCallback(result) {
    console.log("Callback eseguito con il risultato:", result);
  }




//es 75

function firstOperation(data, callback) {
    console.log("Eseguo la prima operazione con:", data);
    setTimeout(() => {
      const result = data + " -> Risultato della prima operazione";
      console.log(result);
      callback(result);
    }, 1000);
  }

  function secondOperation(data, callback) {
    console.log("Eseguo la seconda operazione con:", data);
    setTimeout(() => {
      const result = data + " -> Risultato della seconda operazione";
      console.log(result);
  
      callback(result);
    }, 1000);
  }

  function main() {
    const initialData = "Inizio";
    firstOperation(initialData, (firstResult) => {
      secondOperation(firstResult, (secondResult) => {
        console.log("Operazione completa con risultato:", secondResult);
      });
    });
  }

main();



//es 76

function function1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise risolta dopo 2 secondi")
        } , 2000)
    })
}
function1().then((message) => {
    console.log(message);
});



//es 77 & 78

function function1() {
    return new Promise((resolve, reject) => {
        if(false) {
            setTimeout(() => {
                resolve("promessa risolta dopo 2 secondi")
            }, 2000)
        } else {
            setTimeout(() => {
                reject("promessa non risolta")
            }, 2000)
            
        }
    })
}
function1().then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error)
})
.finally {
    console.log("azione eseguita indipendentemente dal risultato");
}



//es 79 promise chaining

const function1 = () => {
    return new Promise((result) => {
        setTimeout(() => {
            result = resolve(Math.floor(Math.random() * 100))
        }, 1000)
    })
}

function1()
.then((number) => {
    return number * 2
})
.then((risultatoFinale) => {
    return risultatoFinale + 3 
})
console.log(risultatoFinale);



// es 80 catena di promesse con condizioni

const funzione1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            numeroRandom = Math.floor(Math.random() * 100);
            resolve(numeroRandom);
        }, 1000);
    });
};

funzione1(numero)
.then((numero) => {
    if(numero % 2 === 0) {
        return "numero pari";
    } else {
        return "numero Dispari";
    }
})



//esercizio 81

const funzione1 = () => {
    let num = parseInt(prompt("Inserisci un valore numerico"));
    return new Promise((resolve, reject) => {
    if(isNaN(num)) {
        reject("Il valore inserito deve essere un numero");
     } else {
        console.log(`Il numero ${num} è un numero`)
        resolve(num)
     }
    });
}

funzione1()
.then ((numero) => {
    console.log(numero)
    let molt = numero * 2;
    console.log(molt);
    return molt;
})
.then ((numero2) => {
    let somma = numero2 + 2;
    console.log(somma);
})
.catch((error) => {
    console.error(error)
})



//esercizio 82

const funzione1 = () => {
    let num = parseInt(prompt("Inserisci un valore numerico"));
    return new Promise((resolve, reject) => {
    if(isNaN(num)) {
        reject("Il valore inserito deve essere un numero");
     } else {
        console.log(`Il numero ${num} è un numero`)
        resolve(num)
     }
    });
}

funzione1()
.catch((error) => {
    console.error(error)
})



//esercizio 83

const valoreBoolean = (boolean) => {
    return new Promise((resolve, reject) => {
        if(boolean === true) {
            resolve(boolean);
        } else {
            reject(boolean);
        }
    })
}

valoreBoolean(true)
.then((boolean) => {
    console.log("Valore true");
})
.catch((boolean) => {
    console.log("Valore falso");
})



//esercizio 84

const function1 = () => {
    return new Promise((resolve, reject) => {
        let valore = Math.random() * 200;
        if (valore > 100) {
            resolve(valore);
        } else {
            reject(valore);
        }
    })
} 

function1()
.then((valore) => {
    if(valore > 100) {
        console.log("valore maggiore di 100");
    }
    return function1();
}) 
.then((valore) => {
    if(valore > 100) {
        console.log("il secondo valore maggiore di 100");
    }
})
.catch((error) => {
    console.error(error);
})



//esercizio 85 promise.all

let primoRisultato = new Promise (function(resolve, reject) {
    setTimeout(() => {
        let valore = true
        if(valore) {
            resolve("Prima promessa risolta");
        } else {
            reject("Prima promessa fallita")
        }
    } , 2000)
})


let secondoRisultato = new Promise (function(resolve, reject) {
    setTimeout(() => {
        let valore2 = true
        if(valore2) {
            resolve("Seconda promessa risolta");
        } else {
            reject("Seconda promessa fallita")
        }
    } , 5000)
})


Promise.all([
    primoRisultato,
    secondoRisultato
]) .then((valore) => {
    console.log(valore[0], valore[1])
})
.catch((error) => {
    console.error(error)
})

*/

//esercizio 86 promise.race

let primaPromessa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prima promessa risolta")
        }, 2000)
    })
}

let secondaPromessa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta")
        }, 4000)
    })
}

Promise.race([primaPromessa(), secondaPromessa()]) 
    .then((valore) => {
        console.log(valore);
    })
    .catch((error) => {
        console.error(error);
    })