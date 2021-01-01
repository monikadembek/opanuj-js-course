document.addEventListener('DOMContentLoaded', () => {
  const images = {
    treasure: '💰',
    leafs: '🍃'
  }
  
  const forest = document.querySelector('.entry');
  
  forest.addEventListener('mouseover', handler);
  
  function handler(event) {
    let sound = new Howl({
      src: ['fantasy.mp3']
    });
    console.log(event.target);
    if (event.target.classList.contains('tree')) {
      event.target.innerHTML = images.leafs;
    }
    if (event.target.classList.contains('treasure')) {
      event.target.innerHTML = images.treasure;
      prepareMessage();
      sound.play();
      forest.removeEventListener('mouseover', handler);
    }
  }

  function prepareMessage() {
    const message = document.createElement('h1');
    message.innerText = 'Congratulations, you have found a treasure!';
    message.style.color = 'red';
    forest.insertAdjacentElement('afterend', message);
  }
});

//TODO: check behavior of playing audio in Chrome - it plays only once, then shows warning
