export const deleteUser = async (userId) => {
    return fetch(`http://localhost:3030/users/${userId}`, {
        method: 'DELETE',
    });
};
