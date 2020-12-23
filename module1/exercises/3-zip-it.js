/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

/*
function zipIt(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('Wrong parameters');
    }
  
    const firstElements = first.toString().split('');
    const secondElements = second.toString().split('');
    const output = [];
  
    firstElements.forEach((firstElement, index) => {
      output.push(firstElement);
      const secondElement = secondElements.shift();
      if (secondElement !== undefined) {
        output.push(secondElement);
      }
      if (isLastElementOfFirstInput(index, firstElements)) { // && isSecondInputAvailable(secondElements)) {
        output.push(...secondElements); //in case there is no secondElements I will push endefined
      }
    });
  
    return output.join('');
  }
  */
 // not necessary because we can push secondEelements to output afer the end of forEach
 // if they no longer exist we will push empty array 
//   function isLastElementOfFirstInput(index, first) {
//     return (index === first.length - 1);
//   }
  
// don't need this check because if secondElements is undefinesd I will push endefinded value
// and [undefined].join gives empty string
//   function isSecondInputAvailable(second) {
//     return second.length > 0;
//   }
  

function zipIt(first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('Wrong parameters');
  }

  const firstElements = first.toString().split('');
  const secondElements = second.toString().split('');
  const output = [];

  firstElements.forEach((firstElement, index) => {
    output.push(firstElement);
    const secondElement = secondElements.shift();
    if (secondElement !== undefined) {
    output.push(secondElement);
    }
  });

  output.push(...secondElements);

  return output.join('');
}

function displayErrorMessage(error) {
  console.log(error.message);
  console.log('Please provide numbers as input');
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
  verify(zipIt(111, 222), '121212');
  verify(zipIt(123, 456), '142536');
  verify(zipIt(12, 5555), '152555');
  verify(zipIt('12', 5555), '152555');
} catch (error) {
  displayErrorMessage(error);
}