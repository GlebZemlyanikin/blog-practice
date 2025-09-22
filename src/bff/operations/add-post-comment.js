import { addComment } from '../api/add-comment';
import { getPost } from '../api/get-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils/get-post-comments-with-author';

export const addPostComment = async (hash, postId, userId, content) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    await addComment(postId, userId, content);

    const post = await getPost(postId);

    const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

    return {
        error: null,
        res: {
            ...post,
            comments: commentsWithAuthor,
        },
    };
};
