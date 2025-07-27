import { getUser } from './get-user.js';
import { addUser } from './add-user.js';
import { createSession } from './session/create-session.js';

export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin);

        if (!user) {
            return {
                error: 'User not found',
                res: null,
            };
        }

        if (authPassword !== user.password) {
            return {
                error: 'Invalid password',
                res: null,
            };
        }

        return {
            error: null,
            res: createSession(user.role_id),
        };
    },

    async register(regLogin, regPassword) {
        const user = await getUser(regLogin);

        if (user) {
            return {
                error: 'Login already exists',
                res: null,
            };
        }

        await addUser(regLogin, regPassword);

        return {
            error: null,
            res: createSession(user.role_id),
        };
    },
};
