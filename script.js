const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav= document.getElementById("navbar");
// Check if the variable 'bar' exists
if (bar) {
    // If 'bar' exists, add an event listener for the 'click' event
    bar.addEventListener('click', () => {
        // When 'bar' is clicked, add the 'active' class to the 'nav' element
        nav.classList.add('active');
    });
}

if (close) {
    // If 'bar' exists, add an event listener for the 'click' event
    close.addEventListener('click', () => {
        // When 'bar' is clicked, add the 'active' class to the 'nav' element
        nav.classList.remove('active');
    });
}
