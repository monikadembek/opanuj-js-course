// odnajdywanie sie w drzewie elementow
const list = document.querySelector('ul');
console.log(list);
const children = list.children;
console.log(children);
const greeting = document.querySelector('p');
console.log(greeting.nextSibling);
console.log(greeting.nextElementSibling);
console.log(greeting.previousElementSibling);
console.log(list.firstChild);
const first = list.firstElementChild;
console.log(first);
console.log(first.parentNode);
const li = list.querySelector('li');

// modyfikowanie elementow
const newListItem = document.createElement('li');
newListItem.innerText = 'Nowy';
list.appendChild(newListItem);
list.removeChild(newListItem);
const firstAddedItem = document.createElement('li');
firstAddedItem.innerText = 'Prepended item';
list.prepend(firstAddedItem);
firstAddedItem.style.color = 'red';
const style = document.createElement('style');
style.innerHTML = `
    .green { color: green; }
`;
document.body.appendChild(style);
const lastLink = document.querySelector('ul').lastElementChild.querySelector('a');
lastLink.classList.add('green');
// lastLink.classList.remove('green');
// lastLink.classList.toggle('green');
console.log(lastLink.attributes); // zwraca NamedNodeMap z atrybutami
console.log(lastLink.getAttribute('class'));