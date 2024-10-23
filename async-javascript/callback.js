const posts = [
  {title: 'post1', body: 'this is post1'},
  {title: 'post2', body: 'this is post2'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createpost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
}
createpost({title: 'post3', body: 'this is post3'}, getPosts);