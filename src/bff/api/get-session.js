import { transformSession } from '../transformers/transform-session';

export const getSession = async (hashToFind) =>
    fetch(`http://localhost:3030/sessions?hash=${hashToFind}`)
        .then((loadedSessions) => loadedSessions.json())
        .then(
            ([loadedSession]) =>
                loadedSession && transformSession(loadedSession)
        );
