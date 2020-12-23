// petla for
// definicja i, warunek wykonania petli, 
// inkrementacja - wykonywana po kazdym obrocie petli
// i ponownie sprawdzamy warunek, wykonujemy tak dlugo jak warunek jest true
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// petle zagniezdzone
// petla zagniezdzona wykonuje sie w calosci za kazdym obrotem petli w ktorej sie znajduje
for (let i = 0; i < 5; i++) {
    console.log('petla zewn:', i);
    for (let j = 0; j < 5; j++) {
        console.log('  petla wewn:', j);
    }
}

// break / continue
for (let i = 1; i <= 5; i++) {
    if (i== 3) continue;
    console.log('petla z continue gdy i = 3', i);
}

// petla while - moze nie wykonac sie ani razu
// sprawdza warunek przed wykonaniem petli
// wykonuje sie tak dlugo jak dlugo warunek jest true
let j = 10;
while(j > 0) {
    console.log(j);
    j--;
}

// petla do while - zawsze wykona sie przynajmniej raz
// poniewaz warunek jest sprawdzany na koncu petli
let t = 0;
do {
    console.log(t);
    t--;
} while(t > 0);