let newVar; // deklaracja i inicjalizacja oraz przypisanie wartosci undefined
console.log(newVar); // undefined - wartosc zmiennej
console.log(typeof newVar); // undefined - typ zmiennej

console.log(latest); // blad latest is not defined i zatrzymanie skryptu

// hoisting podnoszenie zmiennych i funkcji - na początku mamy deklarację
// i inicjalizację, a dopiero potem przypisanie wartosci

// na poczatku odczytujemy hoisted jako undefined a potem juz ma wartosc
// var hoisted; - na poczatku wartosc jest wyniesioan na gore zakresu,
                // zadeklarowana i zainicjalizowana
console.log(hoisted); // undefined
var hoisted = 'go up!';
// hoisted = 'go up!'; // a tutaj przypisujemy jej warosc
console.log(hoisted); // go up!

// zmienne zadeklarowane slowem kluczowym let lub const sa podnoszone,
// ale ich inicjalizacja jest opozniona, dlatego nie mozemy odczytac ich wartosci
// przed ich utworzeniem
// zmienne te trafiaja do temporal dead zone
console.log(hoisted2); // hoisted is not defined
let hoisted = 'go up!';
console.log(hoisted); 


//podnoszeniu ulegają rowniez funkcje i klasy
//function declaration - podlega podnoszeniu, natomiast function expression nie
hoist();
function hoist() {
    console.log(hoisted3); // undefined
    var hoisted3 = 'go up';
    console.log(hoisted3); // go up
}

// function expression - przypisujemy funkcje do zmiennej
// podnoszeniu ulega sama zmienna, a nie cala funkcja
// foo(); // blad - foo is not defined
const foo = function() {
    console.log(hoisted3); // undefined
    var hoisted3 = 'go up';
    console.log(hoisted3); // go up
}
foo();

// przypisanie zmiennej ma pierwszenstwo przed deklaracją funkcji
var bar = 10;
function bar() {
    const hoisted = 'go up';
    console.log(hoisted);
}
console.log(typeof bar); // number

// deklaracja funkcji ma pierwszenstwo przed deklaracja zmiennych 
var bar2;
function bar2() {
    const hoisted = 'go up';
    console.log(hoisted);
}
console.log(typeof bar2); // function

// const i let nie pozwala zadeklarowac funkcji o tej samej nazwie co zmienna,
// ktora zostala juz wczesniej zadeklarowana

// klasy podlegaja podnoszeniu, ale dziala to tak jak w przypadku zmiennych
// zadeklarowanych z uzyciem slow kluczowych const i let,
// dostep do klasy mamy dopiero po jej utworzeniu
// const member = new Person('Adam'); // error Person is not defined
class Person {
    constructor(name) {
        this.name = name;
    }
}
const member = new Person('Adam');
console.log(member); // Person {}