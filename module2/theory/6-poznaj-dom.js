// element
const paragraph = document.createElement('p');
paragraph.innerText = 'Czesc';
document.body.appendChild(paragraph);

// komentarz
const comment = document.createComment('Nie widzisz mnie');
document.body.appendChild(comment);

// teskt
const txt = document.createTextNode('Po prostu tekst');
document.body.appendChild(txt);

// atrybut
const attr = document.createAttribute('class');
attr.value = 'red';
paragraph.setAttributeNode(attr);