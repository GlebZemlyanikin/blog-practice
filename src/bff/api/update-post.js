export const updatePost = ({ id, title, imageUrl, content }) =>
    fetch(`http://localhost:3030/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id,
            title,
            content,
            image_url: imageUrl,
        }),
    }).then((loadedPost) => loadedPost.json());
