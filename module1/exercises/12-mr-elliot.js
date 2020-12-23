/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/

const encryptionData = {
  a: '4',
  e: '3',
  i: '1',
  o: '0',
  s: '5'
};

function greeting(message) {
  const modifiedLetterCasingMessage = changeLetterCasing(message);
  const encryptedMessage = [...modifiedLetterCasingMessage].map(letter => 
    encryptionData[letter.toLowerCase()] !== undefined ? encryptionData[letter.toLowerCase()] : letter
  ).join('');
  console.log(message, ' => ', encryptedMessage);
  return encryptedMessage;
}

function changeLetterCasing(text) {
  const isEven = index => index % 2 === 0 ? true : false;
  const output = [...text].map((letter, index) => isEven(index) ? letter.toUpperCase() : letter.toLowerCase());
  return output.join('');
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');