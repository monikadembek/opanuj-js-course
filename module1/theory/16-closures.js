// let count = 0;
// count++;
// function counter() {
//     return count;
// }
// counter();

// normalnie jesli jakas funckja zostaje zakonczona, to wszystkie zmienne 
// z jej zakresu zostaja usuniete w celu otymalizacji pamieci
// tak sie nie dzieje w przypadku domkniecia
// funkcja counter zapamietuje swoj leksykalny zakres, ma dostep do zmiennych
// z funkcji rodzica nawet gdy wylolamy funkcje rodzica
// informacja o zmiennej count przechowywana jestw domknieciu
// zeby utworzyc domkniecie musimy zdefiniowac funkcje oraz inna funkcje wewnatrz niej
// a nastepnie zwrocic jak z wykorzystaniem slowa kluczowego return
// lub przekazac jako parametr innej funkcji
// dzieki temu przekazaujemy nie tylko funkcje ale tez informacje z otaczającego ja zakresu
// ktore sa niezbedne do tego aby ta funcka mogla zostac wykonana
function createCounter() {
    let count = 0;
    function counter() {
        count++;
        return `Result ${count}`;
    }
    return counter;
}
const increase = createCounter();
increase(); // Result 1
increase(); // Result 2
increase(); // Result 3
