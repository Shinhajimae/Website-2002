function showMessage() {
alert("Feature activated!");
}

function showCategory(categoryName) {
alert("You selected the " + categoryName + " category.");
}

function showProduct(productName) {
alert("Opening product: " + productName);
}

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

function clearForm() {
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
alert("Form cleared.");
}
