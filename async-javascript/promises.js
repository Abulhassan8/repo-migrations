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
function createpost(post) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  })
}
// createpost({title: 'post3', body: 'this is post3'})
//   .then(getPosts)
//   .catch(err => {
//     alert(err);
//   });

// async function init() {
//   await createpost({title: 'post3', body: 'this is post3'});
//   getPosts();
// }
// init();

async function fetchUsers () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  console.log(result);
}
fetchUsers();

// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(resolve,2000,'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1,promise2,promise3, promise4]).then((value) => {
//   console.log(value);
// });