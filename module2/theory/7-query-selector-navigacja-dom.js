const list = document.querySelector('ul');

const filter = node => node.constructor.name === 'HTMLLIElement'
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_REJECT;

// The NodeIterator interface represents an iterator over the members of a list of the nodes 
// in a subtree of the DOM. The nodes will be returned in document order.
// NodeIterator - przyjmuje 3 parametry, node od ktorego startujemy, 
// predefiniowany filtr do wyfiltrowania wartosci oraz customowy filtr w postaci funkcji callback
// iterator zwracany w petli while daje dostep do kolejnego i poprzedniego elementu
// const iterator = document.createNodeIterator(list, NodeFilter.SHOW_ALL);
const iterator = document.createNodeIterator(list, NodeFilter.SHOW_ELEMENT, filter);
while(iterator.nextNode()) {
    // wyswieta aktualny wezel
    console.log(iterator.referenceNode);
}

// The TreeWalker object represents the nodes of a document subtree and a position within them.
// TreeWalker - przyjmuje 3 parametry, node od ktorego startujemy, 
// predefiniowany filtr do wyfiltrowania wartosci oraz customowy filtr w postaci funkcji callback
// walker zwracany w pętli daje dostęp do elmentow nastepnych, poprzednich, rownoleglych
// do calej rodziny elementów
const walker = document.createTreeWalker(list, NodeFilter.SHOW_ELEMENT, filter);
while(walker.nextNode()) {
    // wyswietla aktualny wezel
    console.log(walker.currentNode);
}