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
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken()
        },
        body: JSON.stringify({
            content: newContent
        })
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById(`content-${postId}`).innerText = result.content;
    });
}

function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}
