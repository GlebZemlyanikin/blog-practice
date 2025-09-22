import { getComments } from '../api/get-comments';
import { getUsers } from '../api/get-users';

export const getPostCommentsWithAuthor = async (postId) => {
    const comments = await getComments(postId);
    const users = await getUsers();

    return comments.map((comment) => {
        const user = users.find(({ id }) => id === comment.authorId);
        return {
            ...comment,
            author: user?.login,
        };
    });
};
