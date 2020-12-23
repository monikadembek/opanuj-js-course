function sayHello() {
    console.log('czesc, jestes spoko');
}
sayHello();

// function declaration
// parametry - informacje przekazywane do funkcji w postaci zmiennych
// return - okresla co dana funkcja zwraca, jej wynik

// function declaration pozwala na wywolanie funkcji przed jej deklaracja w kodzie
// takie funkcje są hoistowane
// hoisting - mechanizm podnoszenia
console.log(sayHelloTo('Rysia')); // Czesc Rysia

function sayHelloTo(user) {
    return `Czesc ${user}`;
}

// w momencie wywolania funkcji przekazuje argumenty
const result = sayHelloTo('Mina');
console.log(result); // Czesc Mina

// function expression - funkcja anonimowa, nie podajemy jej nazwy
// przypisujemy ja do zmiennej i ta zmienna uzywamy przy wywolaniu funkcji
// function expressio nie pozwala na wywolanie takiej funkcji przed jej deklaracja
// takie funkcje nie sa hoistowane
// console.log(add(3, 4)) // Cannot access 'add' before initialization

const add = function(arg1, arg2) {
    return arg1 + arg2;
}

console.log(add(3, 4)); // 7
