// pobieramy referencje do pol formularza i komunikatow z walidacja
const firstName = document.querySelector('.firstName');
const firstNameValidation = document.querySelector('.firstName-validation');

const lastName = document.querySelector('.lastName');
const lastNameValidation = document.querySelector('.lastName-validation');

const color = document.querySelector('.color');
const colorValidation = document.querySelector('.color-validation');

// reagujemy na zmiane wartosci pol
// destrukturyzacja - to samo co event.target.value
firstName.addEventListener('keyup', ({target: {value}}) => {
    updateValidation(firstName, firstNameValidation, value);
});

lastName.addEventListener('keyup', ({target: {value}}) => {
    updateValidation(lastName, lastNameValidation, value);
});

color.addEventListener('change', ({target: {value}}) => {
    updateValidation(color, colorValidation, value);
});

document.forms[0].addEventListener('submit', (event) => {
    //blokujemy domyslen zachowanie przegladarki - wyslanie forma i refresh strony
    event.preventDefault();

    const isFirstNameValid = !!firstName.value; //rzutowanie na zmienna boolean
    const isLastNameValid = !!lastName.value;
    const isColorValid = !!color.value;

    if (isFirstNameValid && isLastNameValid && isColorValid) {
        // przygotowanie danych z formularza do wyslania na server
        // praca z obiektem FormData - wbudowany obiekt w przegladarke
        // ktory pozwala tworzyc kolekcje par klucz - wartosc
        // reprezentujacy poszczegolne pola formularza
        const data = new FormData();

        data.append('firstName', firstName.value);
        data.append('lastName', lastName.value);
        data.append('color', color.value);

        for (let entry of data) {
            console.log(entry);
        }

        // drugi sposob na tworzenie obiekt FormData - przekazanie referencji
        // do formularza do konstruktowa FormData() - przeazuje wszystkie pola i ich wartosci
        const better = new FormData(document.forms[0]);
        
        for (let entry of data) {
            console.log(entry);
        }

    } else {
        updateValidation(firstName, firstNameValidation, value);
        updateValidation(lastName, lastNameValidation, value);
        updateValidation(color, colorValidation, value);
        alert('Niepoprawne dane');
    }
});

function updateValidation(el, validationEl, value) {
    if (value) {
        el.style.borderColor = '';
        validationEl.classList.add('hidden');
    } else {
        el.style.borderColor = 'red';
        validationEl.classList.remove('hidden');
    }
}