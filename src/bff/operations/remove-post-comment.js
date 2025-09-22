import { deleteComment } from '../api/delete-comment';
import { getPost } from '../api/get-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils/get-post-comments-with-author';

export const removePostComment = async (hash, id, postId) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    await deleteComment(id);

    const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

    const post = await getPost(postId);

    return {
        error: null,
        res: {
            ...post,
            comments: commentsWithAuthor,
        },
    };
};
