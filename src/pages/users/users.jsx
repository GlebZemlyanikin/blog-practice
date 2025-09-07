import styled from 'styled-components';
import { H2 } from '../../components/h2/h2';
import { UserRow } from './components/user-row/user-row';
import { TableRow } from './components/table-row/table-row';
import { useServerRequest } from '../../hooks/use-server-request';
import { useEffect, useState } from 'react';
import { Content } from '../../components/content/content';
import { ROLE } from '../../bff/constants/role';

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [deleteError, setDeleteError] = useState(null);
    const [shouldUpdateUserList, setShouldUpdateUserList] = useState(null);

    const requestServer = useServerRequest();

    useEffect(() => {
        Promise.all([
            requestServer('fetchUsers'),
            requestServer('fetchRoles'),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            }

            setUsers(usersRes.res);
            setRoles(rolesRes.res);
        });
    }, [requestServer, shouldUpdateUserList]);

    const onUserRemove = (userId) => {
        requestServer('removeUser', userId).then((result) => {
            if (result.error) {
                setDeleteError(result.error);
                return;
            }

            if (result.res) {
                setShouldUpdateUserList(!shouldUpdateUserList);
                setDeleteError(null);
            }
        });
    };

    return (
        <div className={className}>
            <Content error={errorMessage || deleteError}>
                <H2>Пользователи</H2>
                <div>
                    <TableRow>
                        <div className="login-column">Логин</div>
                        <div className="registered-at-column">
                            Дата регистрации
                        </div>
                        <div className="role-column">Роль</div>
                    </TableRow>

                    {users.map(({ id, login, registeredAt, roleId }) => {
                        return (
                            <UserRow
                                key={id}
                                id={id}
                                login={login}
                                registeredAt={registeredAt}
                                roleId={roleId}
                                roles={roles.filter(
                                    ({ id: roleId }) => roleId !== ROLE.GUEST
                                )}
                                onUserRemove={() => onUserRemove(id)}
                            />
                        );
                    })}
                </div>
            </Content>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 570px;
    margin: 0 auto;
    font-size: 18px;
`;
