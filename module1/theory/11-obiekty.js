// tworzenie obiektu
const myObj = {};
const myObj2 = new Object(); // uzycie konstruktora obiektu
// tworzenie obiektu z pomocą konstruktora

// przykladowy obiekt
// kluczme moze byc tez liczba
const team = {
    name: 'Przeprogramowani', // wlasciwosc
    members_count: 3,
    5: 'number key',
    count: function() { // metoda
        return this.members_count;
    },
    countNew() { // nowy sposob deklarowania metod w obiekcie
        return this.members_count;
    }
}
// wlasciwosci mozna dodawac na etapie tworzenia obiektu 
// lub dopisywac do istniejącego juz obiektu

// dodawanie wlasciwosci
team.website = 'wwww.przeprogramowani.pl';
team['contact_email'] = 'przeprogramowanie@gmail.com';
console.log(team);

//odczytywanie wlasciwosci
console.log(team.name); // 'Przeprogramowani'
console.log(team['name']); // 'Przeprogramowani'
console.log(team[5]); // 'number key'
const property = 'name';
console.log(team[property]); // 'Przeprogramowani'

// metoda - funkcja, ktora jest właściwością obiektu
// wywolywanie metod
team.count(); // 3
team['count'](); // 3

// usuwanie wlasciwosci
delete team.website;
console.log(team.website); //undefined

// zagniezdzanie wlasciwosci
const user = {
    name: 'Przeprogramowani',
    address: {
        city: 'Kraków'
    }
};
user.address.city; // 'Krakow'
user.address.street; // undefined
user.orders.count; // Error: Cannot read property 'count' of undefined

// prawdzanie czy obiekt i wlasciwosci istnieją zeby uniknąć powyzszego bledu
if (user && user.orders) { user.orders.count; }
// rozwiązaniem moze byc tez optional chaining: user?.orders?.count
// ale to jeszcze nie zostao wprowadzone w jsie

// metody obiektow
Object.values(team); // zwraca tablicę wartosci
Object.keys(team); // zwraca tablicę kluczy

// iterowanie po obiektach
for (value of Object.values(team)) {
    console.log(value); // wyswietli kolejne wartosci obiektu
}

for (key of Object.keys(team)) {
    console.log(key); // wyswietli kolejne klucze obiektu
}

// Object.entries() - nowa metoda, pozwala iterowac po kluczach i wartosciach jednoczesnie
// zamienia obiekt na tablicę,
// ta metoda zwraca zagniezdzoną tablice, gdzie wewnętrzne tablice skladają się
// z 2 wartosci, klucza i wartosci i te wartosci odczytujemy z pomocą destrukturyzacji
// [['name', 'Przeprogramowani'], ['members_count', 3]]
for (const [key, value] of Object.entries(team)) {
    console.log(value);
}
console.log(Object.entries(team));

// iterowanie po wlasciwosciach (uwaga na wlasciwosci obiektow dziedziczonych)
for (prop of team) {
    console.log(team[prop]); // zwraca wartosci
} 