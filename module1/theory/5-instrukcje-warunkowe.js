// instrukcje warunkowe
const condition1 = true;
const condition2 = false;
if (condition2) {
    console.log('Wykonaj');
}
console.log('Koniec!');

if (condition2) {
    console.log('Rowne');
} else {
    console.log('Nierowne');
}

if (condition2) {
    console.log('Prawda jest tutaj');
} else if (condition2) {
    console.log('A nie bo tutaj.');
} else {
    console.log('Nie ma prawdy :(');
}

// powyzszy zapis mozna przedstawic z uzyciem instrukcji switch
// switch sprawdza wartosc podana w nawiasie
switch (condition1) {
    case 'Prawda':
        console.log('To prawda');
    break;
    case 'Falsz':
        console.log('Klamiesz');
    break;
    default:
        console.log('Wszyscy mowia prawde');
    break;
}

