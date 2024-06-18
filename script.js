document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const date = new Date().toLocaleString();

        const post = document.createElement('article');
        post.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <small>${date}</small>
            <button class="delete-post">Delete</button>
        `;

        // Handle image upload
        const fileInput = document.getElementById('post-image');
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                post.insertBefore(img, post.childNodes[1]);
            };
            reader.readAsDataURL(file);
        }

        postsSection.appendChild(post);

        // Add event listener for delete button
        post.querySelector('.delete-post').addEventListener('click', function() {
            post.remove();
        });

        postForm.reset();
    });
});
