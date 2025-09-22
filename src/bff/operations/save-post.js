import { addPost } from '../api/add-post';
import { updatePost } from '../api/update-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const savePost = async (hash, newPost) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    const savePost =
        newPost.id === '' ? await addPost(newPost) : await updatePost(newPost);

    return {
        error: null,
        res: savePost,
    };
};
