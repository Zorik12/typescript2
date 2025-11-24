fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const userIds = Array.from(new Set(posts.map(post => post.userId)));
    console.log(userIds);
  })
  .catch(err => console.error(err));
