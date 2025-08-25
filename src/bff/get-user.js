export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3030/users?login=${loginToFind}`)
        .then((loadedUsers) => loadedUsers.json())
        .then(([loadedUser]) => loadedUser);
