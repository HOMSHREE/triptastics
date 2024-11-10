  // Banner script
  const places = ["India", "United States", "France", "Germany", "Australia", "Japan"];
  let placeIndex = 0;
  const placeNameElement = document.getElementById("place-name");

  setInterval(() => {
      placeIndex = (placeIndex + 1) % places.length;
      placeNameElement.textContent = "Visit " + places[placeIndex];
  }, 2000); 


//   bookingForm
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const destination = document.getElementById("destination").value;
    const persons = document.getElementById("persons").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;

    if (destination && persons && startDate && endDate && description.length >= 50) {
        alert("Booking successful!");
    } else {
        alert("Please fill out all fields properly.");
    }
});

// Popup
$(document).ready(function() {
    $("#login").hide();
    $("#register").hide();

    $("a[href='#login']").click(function(e) {
        e.preventDefault();
        $("#login").show();
    });

    $("a[href='#register']").click(function(e) {
        e.preventDefault();
        $("#register").show();
    });

    $(".close-modal").click(function() {
        $("#login, #register").hide();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.flex-container-popup, .auth-buttons a').length) {
            $("#login, #register").hide();
        }
    });
});

// Validation
function PopupValidation() {
    const form = document.forms['PopupValidFrom'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate email
    if (!emailRegex.test(form.txtMail.value)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password and confirm password (for registration)
    if (form.txtPass.value !== form.txtCPass.value) {
      alert('Passwords do not match.');
      return false;
    }
  
    // Additional validation as needed (e.g., password strength, name format)
  
    return true;
  }


  $(document).ready(function() {

    $("#registerForm").submit(function(e) {
        e.preventDefault();

        // Get form values
        const fullName = $("#fullName").val();
        const contact = $("#contact").val();
        const dob = $("#dob").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        const gender = $("#gender").val();

        // Basic validation
        if (fullName === "") {
            alert("Please enter your full name.");
            return false;
        }
        if (contact === "") {
            alert("Please enter your contact number.");
            return false;
        }
        if (dob === "") {
            alert("Please enter your date of birth.");
            return false;
        }
        if (email === "") {
            alert("Please enter your email address.");
            return false;
        }
        if (password === "") {
            alert("Please enter your password.");
            return false;
        }
        if (confirmPassword === "") {
            alert("Please confirm your password.");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");   

            return false;
        }
        if (gender === "") {
            alert("Please select your gender.");
            return false;   

        }

        // Advanced validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const contactRegex = /^\d{10}$/; // Example 10-digit phone number regex

        if (!emailRegex.test($("#email").val())) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!passwordRegex.test($("#password").val())) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return false;
        }

        if (!contactRegex.test($("#contact").val())) {
            alert("Please enter a valid 10-digit contact number.");
            return false;
        }

        // If all validations pass, submit the form
        $(this).unbind('submit').submit();
    });
});