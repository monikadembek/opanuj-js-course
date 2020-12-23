const arr = [1, 2, 3, 4, 16, 5];

//reverse - odwrocenie tablicy
arr.reverse();

// sort - sortowanie tablicy
// domyslnie sort traktuje elementy tablicy jako stringi i porownuje te elementy
arr.sort();
// sort - opcjonalnie przyjmuje funkcje jako argument, wewnątrz ktorej zapisujemy
// logike sortowania
function sortAsc(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
arr.sort(sortAsc);
arr.sort((a, b) => a - b); // callback w postaci funkcji anonimowej, sortuje rosnaco

// forEach - iterowanie po tablicy - przechodzenie po elementach tablicy, 
// jako argument przyjmuje funkcję callback, ktora wykona sie dla kazdego elementu tablicy
arr.forEach(el => {
    console.log(el);
});

// map - iteruj i zwroc wynik dla kazdego elementu, modyfikancja tablicy - mapowanie
// zwraca nowa tablice
// jako argument przyjmuje callback, ktory bedzie wykonany dla kazdego elementu
// to co zwrocimy z callbacku zostanie przypisane jako wartosc tego elementu w nowej tablicy
const mapped = arr.map(el => {
    return el + 1;
});
console.log(mapped);

// reduce - redukuje wszystkie elementy tablicy do pojedynczej wartosci
// przyjmuje 2 argumenty: callback i wartosc poczatkową,
// ktora jest podstawiana pod total przy pierwszym wykonaniu callbacka
// moze zwrocic pojedyncza wartosc lub tablice
// total - zwraca wartosc poprzedniej operacji, item - aktualny element
// index - inex aktualnego elementu, array - tablica, na ktorej wykonujemy akcje
const sum = arr.reduce((total, item, index, array) => {
    return total += item;
}, 0);

// reduce right - taka sama metoda jak reduce, tylko przechodzi od prawej do lewej

// filter - zwraca przefiltrowaną tablice, przyjmuje callback, w ktorym
// podejmujemy decyzje czy dany element ma znalezc sie w nowej tablicy,
// wynik tej funkcji musi zwracac true lub false i na tej podstawie
// dolaczamy element do nowej tablicy
const filtered = arr.filter(el => {
    return el > 4;
});
console.log(filtered);

// split i join - jako argument podajemy lacznik
// split - zamienia stringa na tablice stringow
// join - laczy elementy tablicy w stringa
const user = 'Mina Dem';
const userDetails = user.split(' ');
console.log(userDetails); // ['Mina', 'Dem']
const joined = userDetails.join('-').toLowerCase() + '@gmail.com';
console.log(joined); // mina-dem@gmail.com

// searching
const toSearch = ['Adam', 'Przemek', 'Marcin'];
// indexOf - zwraca numer indexu elementu o podanej wartosci lub -1 gdy nie ma elementu
toSearch.indexOf('Marcin'); // 2
// includes - sprawdza czy tablica zawiera podany element, zwraca true lub false
toSearch.includes('Adam'); // true
// find - przeszukuje tablice na podstawie warunku w przekazanej funkcji callback, 
// zwraca wartosc znalezionego elementu
toSearch.find(el => el == 'Adam'); // Adam
// findIndex - to samo co find, ale zwraca index znalezionego elementu
toSearch.findIndex(el => el == 'Adam'); // 0

// isArray() - sprawdza czy przekazana wartosc jest tablicą
const myArray = [];
typeof myArray; // object
Array.isArray(myArray); // true