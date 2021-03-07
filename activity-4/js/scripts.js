// welcome message
var user = "Michael";
var salutations = "Hello, ";
var greeting = salutations + user + '! Here are the latest Vim-Kernel reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


// product price
var price = 20,
studentDiscount = .10,
studentPrice = price - (price * studentDiscount),
priceEl = document.getElementById('price'),
studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);