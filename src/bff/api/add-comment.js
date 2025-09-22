export const addComment = (postId, userId, content) =>
    fetch('http://localhost:3030/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            post_id: postId,
            author_id: userId,
            content: content,
            published_at: new Date()
                .toISOString()
                .substring(0, 16)
                .replace('T', ' '),
        }),
    });
