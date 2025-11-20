<script>
        // =========================================================
        // JAVASCRIPT IMPLEMENTATION FOR INTERACTION AND VALIDATION
        // =========================================================

        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const generalError = document.getElementById('generalError');
        const successModal = document.getElementById('successModal');

        // Utility function to show an error message
        function showError(inputElement, errorElement, message) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            inputElement.classList.add('input-error');
        }

        // Utility function to hide an error message
        function hideError(inputElement, errorElement) {
            errorElement.style.display = 'none';
            inputElement.classList.remove('input-error');
        }

        // Core Validation Logic
        function validateForm() {
            let isValid = true;
            generalError.style.display = 'none';

            // 1. Validate Name
            if (nameInput.value.trim() === '') {
                showError(nameInput, document.getElementById('nameError'), 'Full Name cannot be empty.');
                isValid = false;
            } else {
                hideError(nameInput, document.getElementById('nameError'));
            }

            // 2. Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                showError(emailInput, document.getElementById('emailError'), 'Email address is required.');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, document.getElementById('emailError'), 'Please enter a valid email format.');
                isValid = false;
            } else {
                hideError(emailInput, document.getElementById('emailError'));
            }
           
            // 3. Validate Phone
            if (phoneInput.value.trim() === '') {
                showError(phoneInput, document.getElementById('phoneError'), 'Phone number is required.');
                isValid = false;
            } else {
                hideError(phoneInput, document.getElementById('phoneError'));
            }

            // 4. Validate Message (Minimum length check)
            if (messageInput.value.trim().length < 10) {
                showError(messageInput, document.getElementById('messageError'), 'Message must be at least 10 characters long.');
                isValid = false;
            } else {
                hideError(messageInput, document.getElementById('messageError'));
            }

            if (!isValid) {
                // If validation fails, show the general error message
                generalError.style.display = 'block';
            }

            return isValid;
        }

        // Add event listener to the form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission
           
            if (validateForm()) {
                // Successful validation - simulate submission
                console.log('Form is valid. Submitting data...');

                // Display the success modal
                successModal.style.display = 'flex';

                // Clear the form after successful "submission"
                form.reset();
            } else {
                console.log('Form validation failed. Please check the error messages.');
            }
        });

        // Add real-time feedback on input blur for better UX
        const inputs = [nameInput, emailInput, phoneInput, messageInput];
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateForm(); // Re-validate on blur
            });
        });
		
        <!-- EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
<script>
    (function(){
      emailjs.init("nmfGS08whgO8sKqx3"); // Replace with your EmailJS public key
    })();
 
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
 
      let valid = true;
 
      // Validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
     
 
      document.getElementById('nameError').textContent = name.value.length < 2 ? "Name must be at least 2 characters." : "";
      document.getElementById('emailError').textContent = email.validity.valid ? "" : "Enter a valid email.";
     
 
      if (name.value.length < 2 || !email.validity.valid || password.value.length < 8) {
        valid = false;
      }
 
      if (!valid) return;
	  
	    // Send email via EmailJS
      emailjs.send("service_txgze6j", "YOUR_TEMPLATE_ID", {
        name: name.value,
        email: email.value,
        
      })
      .then(function(response) {
        alert("Form submitted successfully! Email sent.");
        form.reset();
      }, function(error) {
        alert("Failed to send email: " + JSON.stringify(error));
      });
    });


    </script>