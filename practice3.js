

fetch('https://dummyjson.com/posts')
   .then(function(response) {
      return response.json();
   })
   .then(function(data) {
        let posts = data.posts;
        console.log(posts);

        for (let i = 0; i <= posts.length - 1; i++) {
            createPost(posts[i]);
        }
   })
   .catch(function(error) {
        console.error('Ошибка при получении данных', error);
   });



function createPost(dataPost) {
    const posts = document.querySelector('.posts');
    let post = document.createElement('div');
    post.className = 'posts-item';
    post.innerHTML = `
    <h2>${dataPost.title}</h2>
    <p>${dataPost.body}</p>
    <div class="posts-footer">
        <div class="tags"></div>
        <div class="posts-info">
            <p class="posts-icon like">${dataPost.reactions.likes || 0}</p>
            <p class="posts-icon dislike">${dataPost.reactions.dislikes || 0}</p>
            <p class="posts-icon view">${dataPost.views || 0}</p>
        </div>
    </div>
    `;
    
    let postTags = posts.querySelector('.tags');
    if(dataPost.tags.length !== 0) {
        for(let item = 0; item <= dataPost.tags.length - 1; item++) {
            let tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = `${dataPost.tags[item]}`;
            postTags.appendChild(tag);
        }
    }

    posts.appendChild(post);

}
