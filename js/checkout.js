const form = document.getElementById('checkout');
const firstTime = document.querySelectorAll('input[name="firstTime"]');
const formInput = {
  name: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  new: '',
  location: '',
};

form.addEventListener('submit', (event) => {
  // Stop the form subitting
  event.preventDefault();
  formInput.name = form.elements[0].value;
  formInput.email = form.elements[1].value;
  formInput.street = form.elements[2].value;
  formInput.city = form.elements[3].value;
  formInput.state = form.elements[4].value;
  formInput.zip = form.elements[5].value;
  if (firstTime[0].checked) {
    formInput.new = 'Yes';
  } else {
    formInput.new = 'No';
  }

  formInput.location = document.querySelector('#pickup').value;

  console.log(`Name: ${formInput.name}`);
  console.log(`Email: ${formInput.email}`);
  console.log(`Street Address: ${formInput.street}`);
  console.log(`City: ${formInput.city}`);
  console.log(`State: ${formInput.state}`);
  console.log(`Zip: ${formInput.zip}`);
  console.log(`First Time?: ${formInput.new}`);
  console.log(`Pick up location: ${formInput.location}`);

  alert('Thank you. The form information has been received');
});
