import { authorize } from './operations/authorize';
import { logout } from './operations/logout';
import { register } from './operations/register';
import { fetchRoles } from './operations/fetch-roles';
import { fetchUsers } from './operations/fetch-users';
import { updateUserRole } from './operations/update-user-role';
import { removeUser } from './operations/remove-user';

export const server = {
    logout,
    authorize,
    register,
    fetchUsers,
    fetchRoles,
    updateUserRole,
    removeUser,
};
