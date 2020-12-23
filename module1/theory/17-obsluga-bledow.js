// obsluga bledow - blok try catch - nie naduzywac poniewaz kod staje sie nieczytelny
// jesli w bloku try wystapi blad to od razu przechodzi do wykonania bloku catch
try {
    console.log('Hello');
    console.log(user); // error
    console.log('Have a nice day'); // nie wykonasie
} catch (err) {
    console.log('oops, I don\'t know you');
    console.log(err.name); // Reference error
    console.log(err.message); // user is not defined
    console.log(err.stack); // ..opis bledu skierowany do developera
} finally {
    console.log('Finished');
}

// nested try catch
// w tym przypadku najpierw wykona sie wewnetrzne finally, a potem zewnetrzny catch
// poniewaz zewnetrzne try zwrocilo blad
try {
    try {
        throw new Error('oops!'); // konstruktor Error do ktorego przekazujemy blad
    }
    finally {
        console.log('Finally!'); //Finally!
    }
} catch (e) {
    console.log(e.message); //oops!, undefined
}

// konstruktor Error
try {
    throw new Error('Message');
} catch (e) {
    console.log(e.name); // Error
    console.log(e.message); // Mesage
}

// Custom error - ES6 pozwala stworzyc nową klase, ktora rozszerza klase Error
// aby stworzyc wlasny rodzaj bledu
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Custom error';
    }
}

try {
    throw new CustomError('Oops!'); 
} catch (e) {
    console.log(e.name); // Custom error
    console.log(e.message); // Oops!
}