export const addUser = (login, password) =>
    fetch('http://localhost:3030/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            login: login,
            password: password,
            registered_at: new Date()
                .toISOString()
                .substring(0, 16)
                .replace('T', ' '),
            role_id: 2,
        }),
    }).then((createdUser) => createdUser.json());
