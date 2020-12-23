/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/

function isPangram(sentence) {
  const alphabet = [...'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'];
  let isSentencePangram = true;
  const letterCounter = {};

  let sentenceArray = removeSpecialChars(sentence, alphabet);

  for (let i = 0; i < alphabet.length; i++) {
    let index = sentenceArray.indexOf(alphabet[i]);
    if (index !== -1) {
      while(index !== -1) {
        letterCounter[alphabet[i]] = letterCounter[alphabet[i]] === undefined ? 1 : (letterCounter[alphabet[i]] + 1); 
        index = sentenceArray.indexOf(alphabet[i], index + 1);
      } 
    } else {
      isSentencePangram = false;
      break;
    } 
  }

  if (isSentencePangram) { 
    console.log('Letter Counter:', letterCounter);
  } 

  return isSentencePangram;
}

function removeSpecialChars(sentence, testingExp) {
  const sentenceArray = [...sentence.toLowerCase()];
  const testingPattern = new RegExp(`[${testingExp}]`);
  return sentenceArray.filter(el => testingPattern.test(el));
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
      console.log('Gratulacje!');
  } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw! Więcej liter!'), true);