export const addSession = (hash, user) => {
    fetch('http://localhost:3030/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            hash: hash,
            user: user,
        }),
    });
};
