import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { server } from '../bff/server';
import { selectUserSession } from '../selectors/select-user-session';

export const useServerRequest = () => {
    const session = useSelector(selectUserSession);

    return useCallback(
        (operation, ...params) => {
            const request = [
                'register',
                'authorize',
                'fetchPost',
                'fetchPosts',
            ].includes(operation)
                ? params
                : [session, ...params];

            return server[operation](...request);
        },
        [session]
    );
};
