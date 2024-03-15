// Function to handle form submission
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    // Get the error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
  
    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
  
    // Perform data validation
    let isValid = true;
  
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }
  
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Please enter your email.';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // If the data is valid, you can proceed with form submission or further processing.
    if (isValid) {
      // Uncomment the line below to submit the form (if needed).
      // event.target.submit();
      console.log('Form submitted successfully!');
    }
  }
  
  // Function to check if the email is valid using a simple regular expression
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Attach the validateForm function to the form's submit event
  const form = document.getElementById('myForm');
  form.addEventListener('submit', validateForm);