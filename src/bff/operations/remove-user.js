import { deleteUser } from '../api/delete-user';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId) => {
    const accessRoles = [ROLE.ADMIN];

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    try {
        const response = await deleteUser(userId);
        
        if (!response.ok) {
            return {
                error: 'Ошибка при удалении пользователя',
                res: null,
            };
        }

        return {
            error: null,
            res: true,
        };
    } catch (error) {
        console.error('Error deleting user:', error);
        return {
            error: 'Ошибка при удалении пользователя',
            res: null,
        };
    }
};