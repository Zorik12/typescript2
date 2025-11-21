async function loadPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsResponse = Post[];


async function showFirstPost() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

    const first = posts[0];
    console.log('Первый пост:', {
        id: first.id,
        title: first.title,
        body: first.body
    });
}


async function loadPostById(id) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json());
    return post;
}


async function showLongUserNames() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

    const longNames = users
        .filter(user => user.name.length > 10)
        .map(user => user.name);

    console.log('Имена длиннее 10 символов:', longNames);
}


async function showPostsBodies() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

    const bodies = posts.map(post => post.body);
    console.log('Тексты постов (body):', bodies);
}


async function findPostByTitle() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

    const found = posts.find(post => post.title === 'qui est esse');

    if (found) {
        console.log('Найденный пост:', found);
    } else {
        console.log('Пост не найден');
    }
}



(async () => {
    await showFirstPost();

    const post = await loadPostById(1);
    console.log('Пост с id=1:', post);

    await showLongUserNames();
    await showPostsBodies();
    await findPostByTitle();
})();

