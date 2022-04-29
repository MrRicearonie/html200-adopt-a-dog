const posts = document.querySelector('#posts');
const blogPosts = [{
  title: 'Traveling With Your Dog',
  image: './images/blog-1.jpg',
  altImage: 'Woman with dog at the Grand Canyon',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
}, {
  title: 'How To Walk Multiple Dogs',
  image: './images/blog-2.jpg',
  altImage: '4 dogs on leaches sitting at a city park',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
}, {
  title: 'Teach Your Dog To Fetch!',
  image: './images/blog-3.jpg',
  altImage: 'Woman holding ball above a dog\'s head at dusk',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus.',
},
];

for (let i = 0; i < blogPosts.length; i += 1) {
  const post = blogPosts[i];

  // Create the article for the content to reside in
  const article = document.createElement('article');
  article.setAttribute('class', 'blog-post');

  // Create div for the image to sit in
  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'flex');

  // Create divs for the blog text to sit in
  const flex = document.createElement('div');
  flex.setAttribute('class', 'flex');
  const blogText = document.createElement('div');
  blogText.setAttribute('class', 'blog-text');

  // Set up the image
  const img = document.createElement('img');
  img.setAttribute('src', post.image);
  img.setAttribute('alt', post.altImage);

  // Set up the blog's title
  const title = document.createElement('h2');
  title.textContent = post.title;

  // Set up the post's content
  const content = document.createElement('p');
  content.innerHTML = post.content;

  // Add content to page
  posts.appendChild(article);
  article.appendChild(imgDiv);
  imgDiv.appendChild(img);
  article.append(flex);
  flex.appendChild(blogText);
  blogText.appendChild(title);
  blogText.appendChild(content);
}
