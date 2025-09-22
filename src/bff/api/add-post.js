export const addPost = ({ title, content, imageUrl }) =>
    fetch('http://localhost:3030/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: title,
            content: content,
            image_url: imageUrl,
            published_at: new Date()
                .toISOString()
                .substring(0, 16)
                .replace('T', ' '),
        }),
    }).then((createdPost) => createdPost.json());
