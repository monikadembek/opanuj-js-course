// arrays
const numbers = [1, 2, 3];
const el = numbers[0];

// destructuring - w nawiasach kwadratowych podajemy zmienne, 
// ktore przyjma kolejne wartosci z tablicy
const [first, second, third] = numbers;
first; // 1
second; // 2
third; // 3

//pomijanie jednego elementu z tablicy
const [first1, , third1] = numbers;
first1; // 1
third1; // 3

// Objects
const user = { name: 'Mina', team: 'Przeprogramowani' };
// przy destrukturyzacji obiektów podajemy klucze z obiektu zeby odczytac ich wartosci
// destructuring z uzyciem aliasu - ma na celu unikniecie konfliktu nazw, 
// lub zwiekszenie czytelnosci kodu 
const { name: member, team } = user;
member; // Mina
team; // Przeprogramowani

// tablice sa rodzajem obiektu wiec mozna zapisac destrukturyzacje jak w obiektach
// uzywaja nr indexu i aliasu gdy chcemy zapisac w zmiennej konkretna wartosc z tablicy
const { 2: thirdNumber } = numbers;
console.log(thirdNumber); // 3 

// example1
const teamData = {
    id: 1,
    name: 'Przeprogramowani',
    total: 3,
    members: [
        { name: 'Marcin' },
        { name: 'Przemek' },
        { name: 'Adam' }
    ]
};

// funkcja bez destrukturyzacji
function getMembers(teamData) {
    teamData.members.forEach((member) => { console.log(member.name); });
    console.log(`Total count: ${teamData.total}`)
}

// funkcja z destrukturyzacja
function getMembersDest({ total, members }) {
    members.forEach(({ name }) => { console.log(name); });
    console.log(`Total count: ${total}`)
}

getMembersDest(teamData);

// example 2

function multipleReturns() {
    return [1, 2];
}
const [ firstResult, secondResult ] = multipleReturns();
firstResult; // 1
secondResult; // 2
