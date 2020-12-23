// deklarowanie tablicy
const arrAlternaive = new Array();
const arr = [1, 2, 'text', [3,4,5], { el: 'value'}];

// dodawanie elementow do tablicy
arr.push(1); // dodanie na koniec tablicy
arr.unshift(2); // doanie na poczatku tablicy

//usuwanie elementów z tablicy
arr.pop(); // usuwa element z konca tablicy
arr.shift(); // usuwa pierwszy element tablicy

// usuwanie konkretnego elementu tablicy
const range = [1, 5, 10];
// pierwszy parametr metody splice okresla od ktorego indeksu zaczynamy modyfikacje
// a drugi ile elementow będziemy usuwać lub modyfikowac
range.splice(0, 1); 
console.log(range); // [5, 10]
range.splice(-1, 1); // usuwa ostatni element tablicy, -1 to index ost. elementu
// gdy chcemy zmodyfikowac elementy, poajemy je jako kolejne parametry
range.splice(0, 1, 9); // jako index nr 0 wstawi liczbe 9
range.splice(0, 1, 9, 12, 13); // wstawi 9,12,13 na poczatku tablicy

// metoda slice - ucina z tablicy od podanego jako pierwszy parametr indexu 
// ilosc elementow podana jako drugi marametr
// zwraca nową tablice, a oryginalna tablica nie jest zmieniana, pracujemy na kopii
const newRange = [9, 8, 5];
const fragment = newRange.slice(0, 2); // [9, 8]
const fragment2 = newRange.slice(-2); // ucina 2 ostatnie elementy

// odczytywanie elementow tablicy - za pomoca indexu
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]); // ostatni element tablicy

// nadpisywanie elementu tablicy
numbers[0] = 5;
// pomimo, ze tablica numbers jest zadeklarowana z uzyciem const
// mozemy nadpisac konkretny element w tablicy, ale nie mozemy nadpisac calej tablicy

// łączenie dwoch tablic
const names1 = ['Sam', 'Dean', 'Castiel'];
const names2 = ['Jessica', 'Lisa'];
const family = names1 + names2; //Sam,Dean,Castiel,Jessica,Lisa <- string
// metoda concat laczy 2 tablice
const trueFamily = names1.concat(names2); // ['Sam',.....]
// spread operator
const superFamily = [...names1, ...names2];
console.log(family, trueFamily, superFamily);

// tablice wielowymiarowe - tablice tablic
const tictactoe = [
    ['', 'x', ''],
    ['', '', ''],
    ['', '', '']
];
tictactoe[1][1] = 'o';
console.log(tictactoe);