// Event Delegation => instead of adding event listeners to each child element, we add event listener to the parent element.

// advantages of Event Delegation:
// 1. Memory Efficient
// 2. Performance Efficient
// 3. Prevents bottleneck of events
// 4. DOM manipulation is less

// disadvantages of Event Delegation:
// 1. Not all events bubble up eg. focus, blur, load, unload, window resize etc.
// 2. prevents event delegation in such cases.

document.querySelector("#category").addEventListener("click", (e) => {
    console.log("Parent Element clicked");
    console.log(e.target.id);
    if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
    }
})

document.querySelector("#form").addEventListener("keyup", (e) => {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})
