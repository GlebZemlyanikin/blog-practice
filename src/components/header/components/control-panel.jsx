import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../icon/icon';
import { Button } from '../../button/button';
import styled from 'styled-components';
import { ROLE } from '../../../bff/constants/role';
import { selectUserRole } from '../../../selectors/select-user-role';
import { selectUserLogin } from '../../../selectors/select-user-login';
import { selectUserSession } from '../../../selectors/select-user-session';
import { logout } from '../../../action/logout';
import { checkAccess } from '../../../bff/utils/check-access';

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const UserName = styled.div`
    font-weight: bold;
    font-size: 28px;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);

    const onLogout = () => {
        dispatch(logout(session));
        sessionStorage.removeItem('userData');
    };

    const isAdmin = checkAccess([ROLE.ADMIN], roleId);

    return (
        <div className={className}>
            <RightAligned>
                {roleId === ROLE.GUEST ? (
                    <Button>
                        <Link to="/login">Войти</Link>
                    </Button>
                ) : (
                    <>
                        <UserName>{login}</UserName>

                        <Icon
                            id="fa-sign-out"
                            margin=" 0 0 0 10px"
                            onClick={onLogout}
                        />
                    </>
                )}
            </RightAligned>
            <RightAligned>
                <Icon
                    id="fa-backward"
                    margin="10px 0 0 0"
                    onClick={() => navigate(-1)}
                />
                {isAdmin && (
                    <>
                        <Link to="/post">
                            <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
                        </Link>

                        <Link to="/users">
                            <Icon id="fa-users" margin="10px 0 0 16px" />
                        </Link>
                    </>
                )}
            </RightAligned>
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)``;
