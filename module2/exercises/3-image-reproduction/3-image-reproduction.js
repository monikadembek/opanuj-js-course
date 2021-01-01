const PIXEL_COLOR = '#e44d4d';
const fakeCanvas = document.querySelector('.fake-canvas');
const originalCanvas = document.querySelector('.original-canvas');         
let pattern = [];

originalCanvas.querySelectorAll('.flex-row').forEach((row, rowIndex) => {
  const elementsClasses = [];
  Array.from(row.children).forEach((el, elIndex) => {
    let data = el.classList.contains('pixel-dot') ? 'pixel-dot' : undefined;
    console.log(el, data);
    // pattern[rowIndex][elIndex] = data;
    elementsClasses.push(data);
  });
  pattern[rowIndex] = elementsClasses;
});

console.log(pattern);

fakeCanvas.querySelectorAll('.flex-row').forEach((row, rowIndex) => {
  Array.from(row.children).forEach((el, elIndex) => {
    if (pattern[rowIndex][elIndex] === 'pixel-dot') {
      el.classList.add('pixel-dot');
    }  
  });
});