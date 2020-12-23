// ***** Typy proste
// string
const text = `przeprogramowani`;
typeof text; // string

// number
const number = 1;
typeof number; // number
typeof 0 / 0; // NaN - wartość ktoran ie jest liczbą
typeof Infinity; // number

// boolean - wartosci logiczne true / false
const checked = true;
typeof checked; // boolean

// undefined - zmienne, ktore nie maja wartosci
// najczesciej te, ktore definiujemy i nie przypisujemy im zadnej wartosci
let notDefined;
typeof notDefined; // undefined

const obj = { };
const variable = obj.a; // undefined

// null - nic, zmienna nie posiada wartosci
const nullValue = null;
typeof nullValue; // object - wymusila to wsteczna kompatybilnosc ze starsza wersja js

// symbols - unikatowe wartosci
const symbol = Symbol('sym');
typeof symbol; // symbol

//****Typy zlozone */
// obiekty - zestaw wlasciwosci skladajacych sie z klucza i wlasciwosci
const obj = {
    foo: 1,
    bar: 'baz'
};
typeof obj; // object

//** Konwersja typów - data type conversion */
let numberOrString = 10;
typeof numberOrString; // number
numberOrString = 'Text';
typeof numberOrString; // string

// Tekst jako liczba - converting string to numbers
let counter = '10';
typeof counter; // string
counter = parseInt(counter); // 10
typeof counter; // number