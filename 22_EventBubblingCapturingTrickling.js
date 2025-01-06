// Event Bubbling =>  Event starts from the target element and bubbles up to the root element.
// Event Capturing => Event starts from the root element and trickles down to the target element.
// Event Tricking => is same as Event Bubbling.
// is also called as Event Delegation. It is a technique to handle events on child elements when the parent element is clicked.

// It is a circle => first it goes from the root element to the target element and then from the target element to the root element.
// so event capturing is done first and then event bubbling is done.

document.querySelector('#grandparent').addEventListener('click', (e) => {
    console.log('Grandparent clicked');
    e.stopPropagation(); // stops the event bubbling and capturing
}, true); // capturing

document.querySelector('#parent').addEventListener('click', (e) => {
    console.log('Parent clicked');
}, true); // bubbling

document.querySelector('#child').addEventListener('click', (e) => {
    console.log('Child clicked');
}, true); // capturing