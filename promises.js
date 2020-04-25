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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); 
            
            const err = false;
            if (!err) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000)
    });
}   

// createPost({title:'new post', body:'This is the new post'})
// .then(getPosts)
// .catch(err => console.error(err));


// async / await

// async function init() {
//     await createPost({title:'new post', body:'This is the new post'});
//     getPosts();
// }

// init();


// async / await with fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// const promise1 =  Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye');
// })


// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((
//     (values) => console.log('value: ' , values)
// ));