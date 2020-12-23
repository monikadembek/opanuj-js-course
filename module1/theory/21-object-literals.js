// object literals
const name = 'Przeprogramowani';
const members = [
    { id: 1, name: 'Adam' },
    { id: 2, name: 'Przemek' },
    { id: 3, name: 'Marcin' }
];
const website = 'https://przeprogramowani.pl';
const type = 'friends';

// jesli key i przypisana zmienna mają taka sama nazwę, to mozemy pominąc key
// metody zapisujemy bez slowa kluczowego function
const team = {
    name,
    members,
    website,
    [type]: true,
    // showMembers: function() {} // stary zapis
    showMembers() {
        this.members.forEach(({ name }) => {
            console.log(name);
        })
    }
}
team.showMembers();

// dynamiczne wlasciwosci - gdy nie znamy klucza do ktorego chcemy dodac wartosc
// kiedys dodawalismy wartosc do obiektu w ponizszy sposob
// team[type] = true;