const posts = [
    {title:'post one', body:'This is the post one'},
    {title:'post two', body:'This is the post two'},
    {title:'post three', body:'This is the post three'},
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post); 
    }, 2000);
}

getPosts();