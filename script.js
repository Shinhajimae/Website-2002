// Shows a simple popup when a main feature button is clicked
function showMessage() {
alert("Test button");
}

// Shows which category was selected by the user
function showCategory(categoryName) {
alert("You selected the " + categoryName + " category.");
}

// Shows which product was selected by the user
function showProduct(productName) {
alert("Test button; Product: " + productName);
}

// Validates the contact form and checks if all fields are filled in
function validateForm() {
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
alert("Please fill in all fields.");
return false;
}

alert("Form submitted successfully!");
return false;
}

// Clears all fields in the contact form
function clearForm() {
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
alert("Form cleared.");
}
