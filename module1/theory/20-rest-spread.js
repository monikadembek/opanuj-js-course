// rest parameter - pzwiazany z parametrami funkcji, 
// wykozystywany w deklaracji funkcji
// gdy nie do konca wiemy ile parametrow moze byc do funkcji przekazanych
// ...numbers - parametr spread - oznacza ze wszystkie parametry
// przekazane do funkcji bede dostepne w postaci tablicy numbers
function sum(...numbers) {
    console.log(arguments); 
    // arguments - zawiera liste parametrow przekazanych do funkcji
    // jest to obiekt tablicopodobny, nie mozna na nim wywolac metod redue, map, filter
    return numbers.reduce((total, item) => total += item, 0);
}
sum(1, 2, 3, 4, 5, 6); //21

// operator rest musi byc przekazany jako ostatni parametr funkcji
function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}
multiply(2, 3, 4); // [6, 8]

// spread operator - uzywany przy wywolaniu funkcji,
// sprawia ze elementy tablicy, sa przekazywane jako lista
const elements = [1, 2, 3, 4];
sum(...elements);

// spread - kopiowanie obiektow lub tablic
const user = { id: 1, name: 'Przeprogramowani'};
const user2 = { ...user }; // kopiuje obiekt user do obiektu user2
console.log(user2);

const items = [1, 2, 3];
const items2 = [...items, 4, 5]; // kpiuje tablice i dodaje 2 elementy do nowej tablicy
console.log(items2); // [1, 2, 3, 4, 5]