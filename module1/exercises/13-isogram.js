/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/

function isogram(word) {
  validateInput(word);
  const lowerCaseLettersWord = word.toLowerCase();
  let isIsogram;
  for (letter of lowerCaseLettersWord) {
    isIsogram = doesLetterOccurOnce(letter, lowerCaseLettersWord);
    if (isIsogram === false) {
      break;
    }
  };
  return isIsogram;
}

function doesLetterOccurOnce(letter, word) {
  return [...word].filter(el => el === letter).length === 1 ? true : false;
}

function validateInput(word) {
  const regExp = /[^a-zA-Z]/;
  if (regExp.test(word) === true) {
    throw new Error(`"${word}" is not a proper word`);
  }
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
  verify(isogram('izogram'), true);
  verify(isogram('Przeprogramowani'), false);
  verify(isogram('SprawdzAm'), false);
  verify(isogram('mina1'), false);
} catch(error) {
  console.log(error.message);
}
