// global scope - do globalnych informacji mamy dostep z kazdego miejsca w kodzie
// umieszczamy tam tylko to co konieczne
const condition = true;

// functional scope / local scope - to co zadeklarowane wewnątrz funkcji
// + parametry przekazywane do funkcji
function some() {
  // functional scope / local scope #1
  const functional = 'In functional scope';
  console.log(functional); // In functional scope  
  console.log(condition); // true

  function other() { // functional inner scope / local scoper #2
      const inner = 'In inner functional scope';
      console.log(inner); // In inner fuctional 
      console.log(functional); // In functional scope
      console.log(condition); // true
  }
  other();

  function sibling() { // functional scope / local scope #3
    const next = 'In inner functional scope';
    console.log(next); // In inner functional scope
    console.log(functional); // In functional scope
    console.log(inner); // inner is not defined
  }
  sibling();
}
some();

console.log(functional); // functional is not defined

// block scope - powstaje gdy mamy same klamry, if, lub for
{ // block scope
    console.log(condition);
}


if (condition) { // block scope / local scope

}

for (let i = 0; i < 10; i++) { // block scope / local scope

}

// JS najpierw przeszukuje zakres funkcyjny, blokowy, a gdy nie znajdzie
// tam zadeklarowanej zmienej to przeszukuje zakres globalny
// w poszukiwaniu zmiennych przechodzmy od zakresu biezacego za zakresow zewnętrznych
// az dojdziemy do global scope
// jesli nie znajdzie szukanej zmiennej to mamy blad 'zmienna is not defined'

// zmienne var - zakres funkcyjny, zmienna dostepna w funkcji lub globalnym zakresie,
// w funkcji jest dostepna bez względu na bloki if, for
// zmienne let, const - zakres blokowy {}, dziala tak samo jak funkcyjny, czyli 
// szukamy od zakresu biezacego na zewnatrz

{ 
    var foo = 'sth';
    {
        let bar = 'other';
        console.log(foo); // sth
    }
    {
        let baz = 'baz';
        console.log(bar); // bar is not defined
    }
}
console.log(foo); // sth
console.log(bar); // bar is not defined