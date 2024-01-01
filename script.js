let posts = [];

function renderPosts() {
    const postList = document.getElementById("postList");
    postList.innerHTML = "";

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>
                                 <button onclick="editPost(${index})">Edit</button>
                                 <button onclick="deletePost(${index})">Delete</button>`;
        postList.appendChild(postElement);
    });
}

function openPostEditor() {
    document.getElementById("postEditor").style.display = "block";
    document.getElementById("editorTitle").innerText = "Create New Post";
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}

function cancelPostEditor() {
    document.getElementById("postEditor").style.display = "none";
}

function savePost() {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    if (title && content) {
        const newPost = { title, content };
        posts.push(newPost);
        renderPosts();
        cancelPostEditor();
    } else {
        alert("Title and content are required!");
    }
}

function editPost(index) {
    document.getElementById("postEditor").style.display = "block";
    document.getElementById("editorTitle").innerText = "Edit Post";
    const post = posts[index];
    document.getElementById("postTitle").value = post.title;
    document.getElementById("postContent").value = post.content;

    // Remove the edited post from the array
    posts.splice(index, 1);
    renderPosts();
}

function deletePost(index) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
        // Remove the post from the array
        posts.splice(index, 1);
        renderPosts();
    }
}

// Initial rendering
renderPosts();