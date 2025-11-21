var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        return yield response.json();
    });
}
function showFirstPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
        const first = posts[0];
        console.log('Первый пост:', {
            id: first.id,
            title: first.title,
            body: first.body
        });
    });
}
function loadPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json());
        return post;
    });
}
function showLongUserNames() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());
        const longNames = users
            .filter(user => user.name.length > 10)
            .map(user => user.name);
        console.log('Имена длиннее 10 символов:', longNames);
    });
}
function showPostsBodies() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
        const bodies = posts.map(post => post.body);
        console.log('Тексты постов (body):', bodies);
    });
}
function findPostByTitle() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
        const found = posts.find(post => post.title === 'qui est esse');
        if (found) {
            console.log('Найденный пост:', found);
        }
        else {
            console.log('Пост не найден');
        }
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield showFirstPost();
    const post = yield loadPostById(1);
    console.log('Пост с id=1:', post);
    yield showLongUserNames();
    yield showPostsBodies();
    yield findPostByTitle();
}))();
export {};
