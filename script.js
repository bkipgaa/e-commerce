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

// Sign UP Code function

document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('registrationFormContainer').style.display = 'block';
  });
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorContainer = document.getElementById('errorContainer');
    var errorMessage = '';
  
    if (!username) {
      errorMessage += 'Please enter your username.\n';
    }
  
    if (!email) {
      errorMessage += 'Please enter your email.\n';
    }
  
    if (!password) {
      errorMessage += 'Please enter your password.\n';
    }
  
    if (errorMessage) {
      errorContainer.textContent = errorMessage;
      event.preventDefault();
    }
  });
  
  
