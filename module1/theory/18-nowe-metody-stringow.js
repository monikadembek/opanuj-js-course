const firstName = 'Mina';
const lastName = 'Dembek';

// template - backticks
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const welcome = `Cześć ${firstName.toUpperCase()}, dobrze Cię widzieć!`;

const template = `
    Przyladowy tekst
    zapisany w wielu
    liniach.
`;

// stary zapis tekstu w wielu liniach
const template2 = "\
    Przyladowy tekst\
    zapisany w wielu\
    liniach z dodatkowa zmienna " + firstName;

// iterowanie po stringach
for (letter of fullName) {
    console.log(letter);
}

// Raw - pomija znaki specjalne, traktuje je jak normalny tekst
const text = `Bez znaków specjalnych np \n widzisz?`;
const rawRext = String.raw`Bez znakow specjalnych np \n widzisz?`;
console.log(text);
console.log(rawRext);

// metody
const name = 'Przeprogramowani';
console.log(name.startsWith('Prze')); // true
console.log(name.endsWith('ani')); // true
console.log(name.includes('program')); // true
console.log(name.repeat(2)); // PrzeprogramowaniPrzeprogramowani

