// DOMContentLoaded = strona została zaladowana
document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('input');
    let submitBtn = document.querySelector('.btn');
    let jsSubmitBtn = document.querySelector('.action');
    let clearHandlersBtn = document.querySelector('.mute');
    let list = document.querySelector('ul');
    let form = document.querySelector('form');

    // event - reprezentacja zdarzenia, które własnie sie wywolalo
    input.addEventListener('keyup', (event) => {
        console.log(event.target.value);
    });

    const handler = () => {
        alert('alert dziala');
    };

    submitBtn.addEventListener('click', handler);

    jsSubmitBtn.addEventListener('click', () => {
        submitBtn.dispatchEvent(new CustomEvent('click'));
    });

    clearHandlersBtn.addEventListener('click', () => {
        console.log('remove event listener');
        submitBtn.removeEventListener('click', handler);
    });

    list.addEventListener('mouseenter', () => {
        list.querySelectorAll('a').forEach(el => el.classList.add('green'));
    });

    list.addEventListener('mouseleave', () => {
        list.querySelectorAll('a').forEach(el => el.classList.remove('green'));
    });

    form.addEventListener('submit', () => {
        alert('wyslano');
    });


    // event propagation
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let three = document.querySelector('.three');
    let four = document.querySelector('.four');

    // {capture: true} - trzeci parametr, oznacza ze event wywola sie w fazie capturingu
    // czyli propagacji zdarzenia z gory na dol - od window do targetu
    // eventPhase pobieramy pzez destrukturyzacje obiektu event
    // eventPhase pokazuje w ktorej fazie jest zdarzenie
    one.addEventListener('changecolor', ({eventPhase}) => {
        makeActive(one, 1, eventPhase);
    }, { capture: true });

    two.addEventListener('changecolor', ({eventPhase}) => {
        makeActive(two, 2, eventPhase);
    }, { capture: true });

    three.addEventListener('changecolor', ({eventPhase}) => {
        makeActive(three, 3, eventPhase);
    }, { capture: true });

    four.addEventListener('changecolor', ({eventPhase}) => {
        makeActive(four, 4, eventPhase);
    }, { capture: true });

    // jesli nie przekazujemy trzeciego paramatru do addEventListener, to wywola sie w fazie bubbling
    one.addEventListener('changecolor', ({eventPhase}) => {
        makeInactive(one, 1, eventPhase);
    });

    two.addEventListener('changecolor', ({eventPhase}) => {
        makeInactive(two, 2, eventPhase);
    });

    three.addEventListener('changecolor', ({eventPhase}) => {
        makeInactive(three, 3, eventPhase);
    });

    four.addEventListener('changecolor', ({eventPhase}) => {
        makeInactive(four, 4, eventPhase);
    });

    document.querySelector('.sendEventBtn').addEventListener('click', () => {
        // { bubbles: true } - informacja o zdarzeniu bedzie wrcac do gory dokumentu
        four.dispatchEvent(new CustomEvent('changecolor', { bubbles: true }));
        // gdy usuniemy bubbles: true faza bubbling nie zachodzi, event nie jest propagowany do gory
        four.dispatchEvent(new CustomEvent('changecolor'));
    });

    let timer = 0;

    function makeActive(el, no, evPhase) {
        setTimeout(() => {
            el.classList.add('active');
            console.log(`Zdarzenie w elemencie ${no} => etap ${phase(evPhase)}`);
        }, timer += 500);
    }

    function makeInactive(el, no, evPhase) {
        setTimeout(() => {
            el.classList.remove('active');
            console.log(`Zdarzenie w elemencie ${no} => etap ${phase(evPhase)}`);
        }, timer += 500);
    }

    function phase(evPhase) {
        switch (evPhase.toString()) {
            case '1':
                return 'capturing';
            case '2':
                return 'at target';
            case '3': 
                return 'bubbling';
            default:
                return ''
        }
    }

});