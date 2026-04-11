// Product information
const productData = {
"All-Weather Jacket": {
price: "€80",
image: "Pictures/jacket.jpg",
desc1: "The All-Weather Jacket is designed for changing outdoor conditions and everyday active use. It offers a lightweight feel while still giving useful protection during colder or wetter weather.",
desc2: "Its design focuses on comfort and easy movement, which makes it suitable for walking, training, travel, or general daily wear. The look stays clean and sporty without feeling too heavy.",
desc3: "Because it balances function and appearance well, it works as both a practical outer layer and a stylish active clothing piece. It fits naturally into a modern sporty wardrobe.",
desc4: "Overall, this jacket is a dependable product for users who want comfort, protection, and a simple athletic design in one piece."
},

"Professional Sports Goggles": {
price: "€45",
image: "Pictures/goggles.jpg",
desc1: "Professional Sports Goggles are built to provide eye protection and clear visibility during active movement and outdoor use. They are especially useful in environments where wind, dust, or impact resistance matter.",
desc2: "Their lightweight design helps them feel secure without becoming uncomfortable during longer sessions. This makes them practical for sport, training, and more demanding outdoor routines.",
desc3: "The product combines utility with a more professional sports-focused appearance, giving it a stronger performance identity than standard casual eyewear.",
desc4: "Overall, these goggles are a useful accessory for users who want better protection, visibility, and confidence in active settings."
},

"Athletic Shoes": {
price: "€99",
image: "Pictures/shoes.jpg",
desc1: "Athletic Shoes are designed to support movement, comfort, and daily active routines. They provide a balanced fit that feels suitable for both training and general everyday use.",
desc2: "Their shape and support make them a practical choice for people who want one shoe that works across multiple situations, from light exercise to regular movement throughout the day.",
desc3: "The design keeps a clean sporty appearance, which helps the product fit easily into a simple athletic wardrobe without looking too specialized.",
desc4: "Overall, these shoes are a dependable option for users who want comfort, versatility, and a modern active look."
},

"Ski-pack Essential": {
price: "€120",
image: "Pictures/skipack.jpg",
desc1: "The Ski-pack Essential is a practical product set designed for winter activity and colder outdoor conditions. It supports comfort and preparation during seasonal sports use.",
desc2: "Its main advantage is convenience, because it brings together useful winter-focused functionality in one complete option. That makes it suitable for users who want an easier setup.",
desc3: "The product is especially helpful for people who enjoy skiing or other cold-weather outdoor movement and want gear that feels both useful and reliable.",
desc4: "Overall, this is a strong winter essential that supports warmth, activity, and practical preparation during colder months."
},

"Weather-proof Hat": {
price: "€25",
image: "Pictures/hat.jpg",
desc1: "The Weather-proof Hat is designed to provide simple protection in changing outdoor conditions. It supports comfort during wind, light rain, and cooler daily movement.",
desc2: "Its lightweight and wearable design makes it easy to use as part of both active routines and normal casual outfits. That gives it strong everyday value.",
desc3: "Because it is practical without looking too technical, it fits naturally into a sporty wardrobe while still staying approachable for daily use.",
desc4: "Overall, this hat is a useful accessory for users who want comfort, protection, and a clean outdoor style."
},

"Thermo-isolated Wear": {
price: "€150",
image: "Pictures/thermowear.jpg",
desc1: "Thermo-isolated Wear is made for colder environments where warmth and comfort are especially important. It is designed to help the user stay protected without losing too much mobility.",
desc2: "The product works well for outdoor activity, winter training, and seasonal everyday wear where additional insulation is useful. Its structure feels supportive and practical.",
desc3: "It also provides a more specialized winter-oriented identity than standard active clothing, which makes it suitable for users who need stronger cold-weather performance.",
desc4: "Overall, this is a reliable clothing option for people who want warmth, comfort, and protection in low-temperature conditions."
},

"Olympic Sprint Pro Shoes": {
price: "€110",
image: "Pictures/olympicshoes.jpg",
desc1: "Olympic Sprint Pro Shoes are designed for speed-focused movement and a more performance-oriented running feel. They are made for users who want a lighter, quicker training identity.",
desc2: "Their structure supports active footwork and faster movement, which makes them suitable for sprints, running sessions, and higher-energy training use.",
desc3: "The product also stands out visually with a stronger competition-inspired style, which gives it a more premium performance impression.",
desc4: "Overall, these shoes are a strong option for users who want speed, support, and a sharper athletic character in their footwear."
},

"Nano Flex Training Gloves": {
price: "€35",
image: "Pictures/nanogloves.jpg",
desc1: "Nano Flex Training Gloves are designed to improve grip, comfort, and control during strength training and gym sessions. They help make repeated hand-based exercises feel more secure.",
desc2: "Their fit supports regular training use without becoming too bulky or distracting. This makes them practical for both focused workouts and general fitness routines.",
desc3: "The sporty design gives them a more modern training appearance while still keeping the product easy to understand and use.",
desc4: "Overall, these gloves are a useful accessory for users who want better comfort, cleaner handling, and more confidence during training."
},

"Velocity Core Fitness Mat": {
price: "€45",
image: "Pictures/fitnessmat.jpg",
desc1: "The Velocity Core Fitness Mat provides a stable and comfortable training surface for stretching, mobility work, and floor-based exercise. It helps create a better base for movement.",
desc2: "Its design is simple and practical, which makes it suitable for both home workouts and gym routines. It supports comfort without needing extra setup.",
desc3: "Because it fits many exercise styles, it works well for users at different levels who want a cleaner and more organized training environment.",
desc4: "Overall, this mat is a reliable product for users who want comfort, support, and flexibility in floor-focused workouts."
}
};

// Redirects to catalog page
function scrollCatalog(){
window.location.href = "catalog.html";
}

// Opens product page
function showProduct(name){
window.location.href = "product.html?name=" + encodeURIComponent(name);
}

// Shows selected category (alert only)
function showCategory(cat){
alert("Category: " + cat);
}

// Form submnission (alert only)
function validateForm(){
alert("Form submitted!");
return false;
}

// Clears all text in the contact form
function clearForm(){
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

if(name) name.value = "";
if(email) email.value = "";
if(message) message.value = "";
}

// Sorts products by price
function sortProducts(type){
const grid = document.getElementById("productGrid");
if(!grid) return;

const cards = Array.from(grid.children);

cards.sort((a,b)=>{
const priceA = parseInt(a.dataset.price);
const priceB = parseInt(b.dataset.price);
return type === "low" ? priceA - priceB : priceB - priceA;
});

grid.innerHTML = "";
cards.forEach(card => grid.appendChild(card));
}

// 
function filterCategory(category){
const cards = document.querySelectorAll(".product-card");
cards.forEach(card => {
if(card.dataset.category === category){
card.style.display = "block";
} else {
card.style.display = "none";
}
});
}

function showAllProducts(){
const cards = document.querySelectorAll(".product-card");
cards.forEach(card => {
card.style.display = "block";
});
}

function openProduct(name){
window.location.href = "product.html?name=" + encodeURIComponent(name);
}

// Loads product details dynamically on the product page
function loadProduct(){
const title = document.getElementById("product-title");
const image = document.getElementById("product-image");
const price = document.getElementById("product-price");
const desc1 = document.getElementById("product-desc-1");
const desc2 = document.getElementById("product-desc-2");
const desc3 = document.getElementById("product-desc-3");
const desc4 = document.getElementById("product-desc-4");

// Stops if elements are not found
if(!title || !image || !price || !desc1 || !desc2 || !desc3 || !desc4){
return;
}

// Gets product name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const product = productData[name];

// Stops if product does not exist
if(!product){
return;
}

// Updates page with product data
title.textContent = name;
image.src = product.image;
image.alt = name;
price.textContent = product.price;
desc1.textContent = product.desc1;
desc2.textContent = product.desc2;
desc3.textContent = product.desc3;
desc4.textContent = product.desc4;
}

document.addEventListener("DOMContentLoaded", loadProduct);