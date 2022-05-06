const posts = document.querySelector('#posts');
const blogPosts = [{
  title: 'Traveling With Your Dog',
  id: 'blog-1',
  image: './images/blog-1.jpg',
  imagePreview: './images/blog-1-preview.jpg',
  altImage: 'Woman with dog at the Grand Canyon',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  previewText: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
  location: 'blog.html#blog-1',
}, {
  title: 'How To Walk Multiple Dogs',
  id: 'blog-2',
  image: './images/blog-2.jpg',
  imagePreview: './images/blog-2-preview.jpg',
  altImage: '4 dogs on leaches sitting at a city park',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  previewText: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
  location: 'blog.html#blog-2',
}, {
  title: 'Teach Your Dog To Fetch!',
  id: 'blog-3',
  image: './images/blog-3.jpg',
  imagePreview: './images/blog-3-preview.jpg',
  altImage: 'Woman holding ball above a dog\'s head at dusk',
  content: 'duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br><br>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus.',
  previewText: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
  location: 'blog.html#blog-3',
},
];

function home() {
  for (let i = 0; i < 3; i += 1) {
    const post = blogPosts[i];

    // Create the article for the content to reside in
    const article = document.createElement('article');

    // Create the button to take you to the full post
    const fullPost = document.createElement('a');
    fullPost.setAttribute('href', post.location);

    // Create div for the content to sit into
    const div = document.createElement('div');

    // Create the image
    const img = document.createElement('img');
    img.setAttribute('src', post.imagePreview);
    img.setAttribute('alt', post.altImage);

    // Create the title
    const title = document.createElement('h3');
    title.innerText = post.title;

    // Create post's content
    const content = document.createElement('p');
    content.innerText = post.previewText;

    // Create Read More
    const more = document.createElement('div');
    more.setAttribute('class', 'read-more');
    more.innerText = 'Read More >>';

    // Add content to page
    posts.appendChild(article);
    article.appendChild(fullPost);
    fullPost.appendChild(div);
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(more);
  }
}

function blog() {
  for (let i = 0; i < blogPosts.length; i += 1) {
    const post = blogPosts[i];

    // Create the article for the content to reside in
    const article = document.createElement('article');
    article.setAttribute('class', 'blog-post');
    article.setAttribute('id', post.id);

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
}

// If the title is ADOPTADOG, then we are on the homepage, put in previews
if (document.title === 'ADOPTADOG') {
  home();
// Else, we are on the main blog page
} else {
  blog();
}
