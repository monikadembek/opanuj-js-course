/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "W dwóch krokach"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
* parametru zarejestrowany wcześniej przedrostek.
*
*
* Przykład:
* const greeting = withPrefix('Witaj, ');
* greeting('Janek'); // => 'Witaj, Janek'
* greeting('Tomek'); // => 'Witaj, Tomek'
*
* const goodbye = withPrefix('Żegnaj, ');
* goodbye('Janek'); // => 'Żegnaj, Janek'
* goodbye('Tomek'); // => 'Żegnaj, Tomek'
*
* Utworzona funkcja to tzw. funkcja wyższego rzędu.
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function withPrefix(prefix) {
  validateInput(prefix);
  return input => { 
    validateInput(input);
    return prefix + input;
  };
}
  
function validateInput(input) {
  // jesli uzywam czegos lokalnie to moge zrobic funkcje w funkcji
  const isInputValid = input => typeof input === 'string';
  if (!isInputValid(input)) {
    throw new Error('Wrong parameter');
  }
}

function displayErrorMessage(error) {
  console.log(error.message);
  console.log('Please provide string type input');
}


/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

try {
  const course = withPrefix('I ty Opanujesz JavaScript, ');
  // const course = withPrefix(222);
  verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
  verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
  verify(course(111), 'I ty Opanujesz JavaScript, 111', );
} catch (error) {
  displayErrorMessage(error);
}