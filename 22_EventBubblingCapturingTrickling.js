// Event Bubbling =>  Event starts from the target element and bubbles up to the root element.
// Event Capturing => Event starts from the root element and trickles down to the target element.
// Event Tricking => is same as Event Bubbling.
// is also called as Event Delegation. It is a technique to handle events on child elements when the parent element is clicked.

document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('Grandparent clicked');
}, true); // capturing

document.querySelector('#parent').addEventListener('click', () => {
    console.log('Parent clicked');
}, false); // bubbling

document.querySelector('#child').addEventListener('click', () => {
    console.log('Child clicked');
}, true); // capturing