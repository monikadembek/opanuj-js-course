// var - function scope
var name = "mina";
name = "monika";

// tylko używając słowa kluczowego var możemy ponownie zadeklarować zmienna o tej samej nazwie
// i przypisać do niej wartość - zachowanie nieporzadane, bo mozna coś nadpisac
// let i const nie zezwalaja na takie zachowanie, co moze doprowadzic do 
// nieswiadomego nadpisania istniejacej zmiennej
var name = "Rysia";
var name2; //wartosc undefined
console.log(name2);

// let - block scope
let user = 'przeprogramowani';
user = 'mina';
// let user = 'Rysia'; // Uncaught SyntaxError: Identifier 'user' has already been declared
console.log(user);

// const - block scope
const email = 'email@gmail.com';
//email = 'newemail@g.com'; // Uncaught TypeError: Assignment to constant variable.
console.log(email); 

// global / function scope and block scope
for (var i = 0; i < 10; i++) {
    console.log(i); // 0 - 9
}
console.log(`Outside loop i = ${i}`); // i = 10

for (let j = 0; j < 10; j++) {
    console.log(j); // 0 - 9
}
// console.log(`Outside loop j = ${j}`); // Uncaught ReferenceError: j is not defined