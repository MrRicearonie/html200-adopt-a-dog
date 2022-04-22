/* eslint-disable no-alert */
let total = 0;

// enlint-disable-next-line no-unused-vars
function alertDogInfo (name, breed, price) {
    alert(`Hi! I\'m ${name}\nI am a ${breed}\nAnd I cost $${price} to adopt`);
}

// enlint-disable-next-line no-unused-vars
function addDog (price) {
    total += Number(price);
    alert(`Your total is now: $${total.toFixed(2)}`);
}