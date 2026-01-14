function editPost(postId) {
    const contentDiv = document.getElementById(`content-${postId}`);
    const originalContent = contentDiv.innerText;

    contentDiv.innerHTML = `
        <textarea id="textarea-${postId}" class="form-control" rows="3">
${originalContent}
        </textarea>
        <button class="btn btn-sm btn-primary mt-2"
                onclick="savePost(${postId})">
            Save
        </button>
    `;
}

function savePost(postId) {
    const textarea = document.getElementById(`textarea-${postId}`);
    const newContent = textarea.value;

    fetch(`/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
            content: newContent
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById(`content-${postId}`).innerText = result.content;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}


function toggleLike(postId) {
    fetch(`/posts/${postId}/like`)
    .then(response => response.json())
    .then(data => {
        const likeSpan = document.getElementById(`likes-${postId}`);
        likeSpan.innerText = data.likes_count;
    })
    .catch(error => console.error(error));
}
