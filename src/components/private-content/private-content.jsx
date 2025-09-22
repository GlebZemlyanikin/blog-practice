import { Error } from '../error/error';
import { ERROR } from '../../constants/error';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors/select-user-role';
import { checkAccess } from '../../bff/utils/check-access';

export const PrivateContent = ({ children, access, serverError = null }) => {
    const userRoel = useSelector(selectUserRole);

    const accessError = checkAccess(access, userRoel)
        ? null
        : ERROR.ACCESS_DENIED;

    const error = accessError || serverError;

    return error ? <Error error={error} /> : children;
};
