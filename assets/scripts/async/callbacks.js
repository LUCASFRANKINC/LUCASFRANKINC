const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((value,index) => {
            output += `<li>${value.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

getPosts();