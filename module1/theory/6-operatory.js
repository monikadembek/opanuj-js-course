// operatory arytmetyczne
1 + 2;
1 - 2;
3 * (4 - 2);
4 / 2;
4 % 3; // operator modulo - reszta z dzielenia

// operatory przypisania
let x = 1;
// x += 10;
x = x + 10;
x -= 1;
x *= 5;
x /= 5;
x %= 3;

// inkrementacja - zwiększenie wartosci / dekrementacja - zmniejszenie
let num = 5;
num++; // postinkrementacja, wartosc num w tej linii dalej wynosi 5
// dopiero w kolejnej będzie zwiekszona o 1
num; // 6
num = num + 1; // 7
++num; // preinkrementacja 8
num--; // 8 - postdekeremntacja
num--; // 7

// operatory porownania
let a = 1;
let b = 2;
a == b; // false
a != b // true
a < b; // true
a >= b; // false
let c = "1";
a == c; // true - sprawdza tylko warosc liczb
a === c; // false - porownanie scisle - sprawdza wartosc i typ
a !== c; // true 

// operatory logiczne - wykorzystywane w instrukcjach warunkowych
let firstCondition = true;
let secondCondition = false;
// && - jesli pierwszy warunek jest false to drugi nie jest juz sprawdzany
firstCondition && secondCondition; // false
// || sprawdzane oba warunki
firstCondition || secondCondition; // true
// ! not - odwrotnosc
!secondCondition && firstCondition; // true

// ternary operator - skrocona instrukcja warunkowa if
// firstCondition - to warunek, jak true to przypisujemy pierwsza wartosc, jak false to druga
// if (firstCondition) { firstCondition } else { secondCondition }
let ternary = firstCondition ? firstCondition : secondCondition;

// operatory jednowartosciowe - przyjmuja jedna wartosc i wykonuja na niej operacje
const obj = {
     property: 'value'
};
delete obj.property;
console.log(obj.property); // undefined

typeof obj; // object

//void - uzywany gdy chcemy wykonac jakies wyrazenie, ale nie chcemy zwracac zadnej wartosci
void obj; // undefined

// operatory relacyjne: in, instanceof
// in - zwraca true lub false , zaleznie od tego czy dana wlasciwosc znajduje sie w obiekcie
console.log('property' in obj); // false, bo usunelismy ta property

// instanceof - sprawdza czy dany obiekt jest instancją danej klasy
console.log(obj instanceof Object); // true
