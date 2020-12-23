// funkcja konstruktora, ktory powiązany jest z prototypem
// i na podstawie ktorego mozemy tworzyc nowe obiekty
function Vehicle(name, color) {
    // laczymy obiekt tworzony na podstawie tej funkcji z prototypem
    // const car = Object.create(Vehicle.prototype); <- new to zalatwia domyslnie

    // dzieki slowo new zamieniamy car na this
    // car.name = name; 
    // car.color = color;
    // car.engineStatus = 'off';
    this.name = name; 
    this.color = color;
    this.engineStatus = 'off';

    // return car; <- new to zalatwia domyslnie
}

// Prototyp to obiekt, ktory posiada kazda funkcja w JavaScripcie
// ten obiekt wykorzystywany jest po to aby dodawac w nim wlasciwosci
// ktore bea dostepne w kazdej instancji tej funkcji
// dzieki temu nie powtarzamy sie i oszczedzamy pamiec
console.log(Vehicle.prototype); // Vehicle {}

//Prototyp to obiekt, wiec dodaje do niego nowe wlasciwosci, ktore sa funkcjami
Vehicle.prototype.startEngine = function() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
};
Vehicle.prototype.stopEngine = function() {
    this.engineStatus = 'off';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
};

// w instancjach obiektu vehicle nie ma sladu funkcji start i stopEngine
// ale mamy do nich dostep poniewaz sa one w prototypie
// a funckje Vehicle polaczylismy z prototypem z pomoca Object.create

// slowo kluczowe new wykorzystujemy gdy tworzymy nową instancje obiektu
// dzieki temu w funkcji konstruktora JS samodzielnie utworzy powiazanie
// z odpowiednim prototypem oraz zadba o to by zwrocic odpowiedni obiekt
const car1 = new Vehicle('Mustang', 'red');
console.log(car1);
car1.startEngine();
console.log(car1.engineStatus); //on
const car2 = new Vehicle('camaro', 'yellow');
console.log(car2.name);

// Object.create - tworzy powiazanie miedzy dwoma obiektami
const parentObj = {
    team: 'Przeprogramowani'
};
const child = Object.create(parentObj);
child.name = 'Adam';
child.name; //Adam
// gdy jakas wlasciwosc nie istnieje w obiekcie child, to przeszukujemy obiekt wyzej
child.team; // Przeprogramowani
