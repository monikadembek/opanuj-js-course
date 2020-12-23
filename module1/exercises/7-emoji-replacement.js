/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 7 - "Emoji"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
* z mapowaniem z obiektu "emojiMappings";
*
* Przykład:
* useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
* useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
*/

const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
};
  
function useEmoji(input) {
    for (const [key, value] of Object.entries(emojiMappings)) {
        const regex = new RegExp(key, 'gi');
        input = input.replace(regex, value);
    }
    console.log(input);
    return input;
}

useEmoji('Takiemu zachowaniu mówię stop i to mocny stop! i gwiazda');
useEmoji('Jadę po nowy samochód :D');
useEmoji('Właśnie buduję swoje skille w JS');
useEmoji('Właśnie buduję swoje skille w JS. Gwiazda ze mnie ;-)');