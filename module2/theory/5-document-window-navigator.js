/* DOCUMENT */
// pobieranie referecji do elementów - 1
const form = document.querySelector('form');

// pobieranie referencji do elementow - 2
// wszystkie linki na stronie, wszystkie formy i element body
const forms = document.forms;
const links = document.links;
const body = document.body;
console.log(forms);
console.log(links);
console.log(body);

// reagowanie na zdarzenia
document.addEventListener('DOMContentLoaded', () => {
    console.log('Zaladowano');
});

// tworzenie nowych elementow
const select = document.createElement('select');
const option = document.createElement('option');
option.textContent = '1';
option.value = 1;
select.append(option);
form.appendChild(select);

// element nadrzedny
// document jest nadrzędnym elementem wszystkich pozostalych elementow na stronie,
// nie ma swojego parenta
const grandParent = document.parentNode;
console.log(grandParent);


// interfejs location
// pokazuje info: host, hostname, ares strony, origin, port, search czyli queryParams
console.log(document.location);

// typ obiektu document
const typeName = document.constructor.name;
// HTMLDocument https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument
// jest to interfejs, do ktorego mamy dostep poprzez Window.HTMLDocument 
// i zawiera metody i propertisy specyficzne dla HTML documentow
// https://developer.mozilla.org/en-US/docs/Web/API/Document
console.log(typeName); 


/* WINDOW */
// rozmiar okna
const outerHeight = window.outerHeight; // okno + interfejs przegladarki
const innerHeight = window.innerHeight; // tylko wysokosc okna ze stroną
const outerWidth = window.outerWidth; // okno + interfejs przegladarki
const innerWidth = window.innerWidth; // tylko szerokosc okna

// referencja do okna rodzica - w przypadku gdy uzylismy funkcji window.open
// dostajemy referencje do rodzica, ktory wywolam te metode
const opener = window.opener;
console.log(opener);

// scroll - dynamiczne scrollowanie z poziomu kodu
setTimeout(() => {
    window.scrollTo(0, 100);
}, 1000);

// referencje do obiektów
console.log(window.document);
// navigator reprezentuje dane urządzenie i przegladarke internetowa
console.log(window.navigator);

/* NAVIGATOR */
// user-agent
const ua = navigator.appVersion;
console.log(ua);

// preferowane ustawienia jezyka
const lang = navigator.languages;
console.log(lang);

// geolokalizacja - polozenie uzytkownika
const onGeo = position => {
    console.log(`${position.coords.latitude.toString()}`);
    console.log(`${position.coords.longitude.toString()}`);
};
const onError = err => {
    console.log(err);
}
const options = {
    enableHighAccuracy: true
};
navigator.geolocation.getCurrentPosition(onGeo, onError, options);

// dodatkowe api - 
// np. mikrofon dzieki mediaDevices, pracujemy jak na promisach
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(audioStream => {
        //...
    })
    .catch(err => {
        //...
    });