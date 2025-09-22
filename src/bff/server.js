import { logout } from './operations/logout';
import { authorize } from './operations/authorize';
import { register } from './operations/register';
import { fetchPost } from './operations/fetch-post';
import { fetchRoles } from './operations/fetch-roles';
import { fetchUsers } from './operations/fetch-users';
import { updateUserRole } from './operations/update-user-role';
import { removeUser } from './operations/remove-user';
import { addPostComment } from './operations/add-post-comment';
import { removePostComment } from './operations/remove-post-comment';
import { savePost } from './operations/save-post';
import { removePost } from './operations/remove-post';
import { fetchPosts } from './operations/fetch-posts';

export const server = {
    authorize,
    logout,
    register,
    fetchPost,
    fetchRoles,
    fetchUsers,
    updateUserRole,
    removeUser,
    addPostComment,
    removePostComment,
    savePost,
    removePost,
    fetchPosts,
};
