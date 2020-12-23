// klasy w JSie sa uproszczeniem skladni i sa tez funkcjami
const x = function() {};
const y = class {};
typeof x; // function
typeof y; // function

// konstruktor zapisujemy jako oddzielna metode w klasie
// gdy chcemy dodac metodę do prototypu zapisujemy ją ponizej konstruktora
class Vehicle {
    // metoda konstruktora
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.engineStatus = 'off';
    }

    // metody dodawane do prototypu
    startEngine() {
        this.engineStatus = 'on';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
}

// tworzenie obiektu na podstawie klasy
const car = new Vehicle('Mustang', 'red');
console.log(car.name); //'Mustang'
car.startEngine();
console.log(car.engineStatus); //on

// wyswietlajac instancje obiektu, nie wyswietlimy metody startEngine,
// poniewaz znajduje sie w prototypie,
// tylko wlasciwsci z konstruktora
console.log(car);

// dziedziczenie - daje nam dostep do wlasciwosci i metod klasy nadrzednej
// dziedziczenie polega na dziedziczeniu pewnych wlasciwosci lub metod 
// w klasach podrzednych - podstawa programowania obiektowego
class Car extends Vehicle {
    constructor(name, color, year) { // konstruktor klasy Car
        super(name, color) // odwolanie do konstruktora klasy nadrzednej czyli Vehicle
        this.year = year;
    }
}

const eleanor = new Car('Shelby Mustang GT500', 'grey', 1967);
console.log(eleanor.name);
eleanor.startEngine();
console.log(eleanor.engineStatus);
console.log(eleanor.year);