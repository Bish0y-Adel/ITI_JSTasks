
function RegistrationForm() {
    // Get all form elements using getElementById
    let form = document.getElementById("registrationForm");
    let fullName = document.getElementById("fullName");
    let email = document.getElementById("email");
    let city = document.getElementById("city");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");
    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");
    
    // Load saved data from cookies when page loads
    if (hasCookie("fullName")) {
        fullName.value = getCookie("fullName");
    }
    if (hasCookie("email")) {
        email.value = getCookie("email");
    }
    if (hasCookie("city")) {
        city.value = getCookie("city");
    }
    
    // Full name focus event - show blue border
    fullName.addEventListener("focus", function() {
        fullName.style.border = "solid 1px blue";
    });
    
    // Full name blur event - remove blue border and validate
    fullName.addEventListener("blur", function() {
        fullName.style.border = "1px solid #ccc";
        validateFullName();
    });
    
    // Validate full name
    function validateFullName() {
        let nameValue = fullName.value.trim();
        
        if (nameValue === "" || nameValue.length <= 3) {
            nameError.style.display = "block";
            fullName.style.background = "gray";
            fullName.focus();
            fullName.select();
            return false;
        } else {
            nameError.style.display = "none";
            fullName.style.background = "white";
            return true;
        }
    }
    
    // Password blur event - validate
    password.addEventListener("blur", function() {
        validatePasswords();
    });
    
    // Repeat password blur event - validate
    repeatPassword.addEventListener("blur", function() {
        validatePasswords();
    });
    
    // Validate passwords
    function validatePasswords() {
        let pass = password.value;
        let repeatPass = repeatPassword.value;
        
        if (pass === "" || repeatPass === "") {
            passwordError.innerText = "password and repeat password are required";
            passwordError.style.display = "block";
            password.style.background = "gray";
            repeatPassword.style.background = "gray";
            return false;
        } else if (pass !== repeatPass) {
            passwordError.innerText = "password and repeat password should be the same";
            passwordError.style.display = "block";
            password.style.background = "gray";
            repeatPassword.style.background = "gray";
            return false;
        } else {
            passwordError.style.display = "none";
            password.style.background = "white";
            repeatPassword.style.background = "white";
            return true;
        }
    }
    
    // Remove error when user types correctly
    password.addEventListener("input", function() {
        if (password.value !== "" && repeatPassword.value !== "" && password.value === repeatPassword.value) {
            passwordError.style.display = "none";
            password.style.background = "white";
            repeatPassword.style.background = "white";
        }
    });
    
    repeatPassword.addEventListener("input", function() {
        if (password.value !== "" && repeatPassword.value !== "" && password.value === repeatPassword.value) {
            passwordError.style.display = "none";
            password.style.background = "white";
            repeatPassword.style.background = "white";
        }
    });
    
    // Form submit event
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let isNameValid = validateFullName();
        let isPasswordValid = validatePasswords();
        
        if (isNameValid && isPasswordValid) {
            // Save all form data in cookies using CookiesLibrary
            setCookie("fullName", fullName.value, 7);
            setCookie("email", email.value, 7);
            setCookie("city", city.value, 7);
            
            console.log("Data saved in cookies:");
            console.log("Full Name:", fullName.value);
            console.log("Email:", email.value);
            console.log("City:", city.value);
            console.log("All cookies:", document.cookie);
            
            // Redirect to thank you page
            window.location.href = "ThankYou.html";
        } else {
            alert("Plz correct the validation errors first.");
        }
    });
}

// Initialize form
RegistrationForm();

function showInnerText() {
    let demoBox = document.getElementById("demoBox");
    let result = document.getElementById("result");
    
    let text = demoBox.innerText;
    
    result.innerHTML = "<strong>innerText:</strong><br>" + 
                      "Returns only VISIBLE text (ignores hidden elements and script tags)<br><br>" +
                      "<code>" + text + "</code>";
}

function showTextContent() {
    let demoBox = document.getElementById("demoBox");
    let result = document.getElementById("result");
    
    let text = demoBox.textContent;
    
    result.innerHTML = "<strong>textContent:</strong><br>" +
                      "Returns ALL text including HIDDEN elements (but ignores script tags)<br><br>" +
                      "<code>" + text + "</code>";
}
