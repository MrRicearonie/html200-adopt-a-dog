/* eslint-disable no-alert */
let total = 0;
let display = 0;
const dogArea = document.querySelector('#dogs');

// List of all the dogs
const dogs = [{
  name: 'Murphy',
  img: './images/murphy-card.jpg',
  imgAlt: 'A sad mixed-breed dog',
  breed: 'Mixed-breed',
  cost: '123.45',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Poppy',
  img: './images/poppy-card.jpg',
  imgAlt: 'A happy havanese dog running down a road',
  breed: 'Havanese',
  cost: '82.90',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Jack',
  img: './images/jack-card.jpg',
  imgAlt: 'A beagle looking up to the left',
  breed: 'Beagle',
  cost: '155.00',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Duffy',
  img: './images/duffy-card.jpg',
  imgAlt: 'A very happy pitbull in the grass',
  breed: 'Pitbull',
  cost: '123.45',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Lucas',
  img: './images/lucas-card.jpg',
  imgAlt: 'A mixed-breed dog looking up into the camera',
  breed: 'Mixed-breed',
  cost: '79.99',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Jake',
  img: './images/jake-card.jpg',
  imgAlt: 'A yellow lab on the beach',
  breed: 'Yellow lab',
  cost: '103.42',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Angus',
  img: './images/angus-card.jpg',
  imgAlt: 'A happy boxer on some grass',
  breed: 'Boxer',
  cost: '74.95',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Violet',
  img: './images/violet-card.jpg',
  imgAlt: 'A chocolate lab puppy',
  breed: 'Chocolate lab',
  cost: '149.75',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Piper',
  img: './images/piper-card.jpg',
  imgAlt: 'A happy duck trolling retreiver in the woods',
  breed: 'Duck trolling retreiver',
  cost: '109.82',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Maximus',
  img: './images/maximus-card.jpg',
  imgAlt: 'A russell terrier on textured contrete',
  breed: 'Russell Terrier',
  cost: '99.99',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Luna',
  img: './images/luna-card.jpg',
  imgAlt: 'An extreamly relaxed, happy golden retreiver in a truck bed',
  breed: 'Golden retreiver',
  cost: '109.87',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
}, {
  name: 'Stella',
  img: './images/stella-card.jpg',
  imgAlt: 'A russian toy sleeping on a couch',
  breed: 'Russian toy',
  cost: '59.87',
  desc: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
},
];

// If title is ADOPTADOG, then on homepage and only show up to 6
if (document.title === 'ADOPTADOG' && dogs.length >= 6) {
  display = 6;
} else {
  display = dogs.length;
}

for (let i = 0; i < display; i += 1) {
  const dog = dogs[i];

  // Set up the article for the dog card
  const article = document.createElement('article');
  article.setAttribute('class', 'dog');

  // Set up img
  const img = document.createElement('img');
  img.setAttribute('onclick', `alertDogInfo('${dog.name}', '${dog.breed}', '${dog.cost}')`);
  img.setAttribute('src', dog.img);
  img.setAttribute('alt', dog.imgAlt);

  // Set up dog info
  const about = document.createElement('div');
  about.setAttribute('class', 'about-dog');

  // Set up dog name
  const name = document.createElement('h3');
  name.innerText = dog.name;

  // Set up cost
  const cost = document.createElement('p');
  const costText = `<strong>Cost to Adopt: $${dog.cost}`;
  cost.innerHTML = costText;

  // Set up description
  const desc = document.createElement('p');
  desc.innerHTML = dog.desc;

  // Set up button
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn adopt-btn');
  btn.setAttribute('onclick', `addDog('${dog.cost}')`);
  btn.innerText = 'Adopt';

  // Add card to page
  dogArea.appendChild(article);
  article.appendChild(img);
  article.appendChild(about);
  about.appendChild(name);
  about.appendChild(cost);
  about.appendChild(desc);
  about.appendChild(btn);
}

// eslint-disable-next-line no-unused-vars
function alertDogInfo(name, breed, price) {
  alert(`Hi! I'm ${name}\nI am a ${breed}\nAnd I cost $${price} to adopt`);
}

// eslint-disable-next-line no-unused-vars
function addDog(price) {
  total += Number(price);
  alert(`Your total is now: $${total.toFixed(2)}`);
}
