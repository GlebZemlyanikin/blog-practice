import { ROLE } from './constants/role.js';
import { removeComment } from './session/remove-comment.js';

export const createSession = (roleId) => {
    const session = {
        logout() {
            Object.keys(session).forEach((key) => {
                delete session[key];
            });
        },
    };

    switch (roleId) {
        case ROLE.ADMIN:
            {
                session.removeComment = removeComment;
            }
            break;
        case ROLE.MODERATOR:
            {
                session.removeComment = removeComment;
            }
            break;
        case ROLE.READER:
            {
                // Readers do not have any special session methods
            }
            break;

        default:
            break;
    }

    return session;
};
