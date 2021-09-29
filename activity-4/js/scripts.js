//welcome messages
var user = 'Brent';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! Here are the latest reviews for Milwaukee Beans';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


//product prices
var price = 12.99,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);