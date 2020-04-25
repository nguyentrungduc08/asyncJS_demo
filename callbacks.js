const posts = [
    {title:'post one', body:'This is the post one'},
    {title:'post two', body:'This is the post two'},
    {title:'post three', body:'This is the post three'},
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}, ${post.body}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post); 
        cb();
    }, 2000);
}

createPost({title:'new post', body:'This is the new post'}, getPosts);