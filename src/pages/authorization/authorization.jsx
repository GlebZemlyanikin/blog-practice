import { useState, useEffect } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { server } from '../../bff/server.js';
import { Input } from '../../components/input/input.jsx';
import { Button } from '../../components/button/button.jsx';
import { H2 } from '../../components/h2/h2.jsx';
import { setUser } from '../../action/set-user.js';
import { selectUserRole } from '../../selectors/select-user-role.js';
import { ROLE } from '../../bff/constants/role.js';

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: underline;
    margin: 20px 0;
    font-size: 18px;
`;

const ErrorMessage = styled.div`
    background: rgba(235, 162, 160, 1);
    font-size: 16px;
    margin: 10px 0 0;
    padding: 10px;
`;

const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполнить логин')
        .matches(
            /^\w+$/,
            'Неверно заполнен логин. Допускается только буквы и цифры'
        )
        .min(3, 'Неверно заполнен логин. Минимум 3 символа')
        .max(15, 'Неверно заполнен логин. Максимум 15 символа'),
    password: yup
        .string()
        .required('Заполнить пароль')
        .matches(
            /^[\w#%]+$/,
            'Неверно заполнен пароль. Допускается только буквы, цифры и знаки # %'
        )
        .min(6, 'Неверно заполнен пароль. Минимум 6 символа')
        .max(20, 'Неверно заполнен пароль. Максимум 20 символа'),
});

const AuthorizationContainer = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        resolver: yupResolver(authFormSchema),
    });

    const [serverError, setServerError] = useState(null);
    const dispatch = useDispatch();
    const store = useStore();
    const roleId = useSelector(selectUserRole);

    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout;

        return store.subscribe(() => {
            let previousWasLogout = currentWasLogout;

            currentWasLogout = store.getState().app.wasLogout;

            if (currentWasLogout !== previousWasLogout) {
                reset();
            }
        });
    }, [reset, store]);

    const onSubmit = ({ login, password }) => {
        server.authorize(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса: ${error}`);
                return;
            }

            dispatch(setUser(res));
        });
    };

    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/" />;
    }

    return (
        <div className={className}>
            <H2>Авторизация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Логин..."
                    {...register('login', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Пароль..."
                    {...register('password', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type="submit" disabled={!!formError}>
                    Авторизация
                </Button>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <StyledLink to="/register">Регистрация</StyledLink>
            </form>
        </div>
    );
};

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > form {
        display: flex;
        flex-direction: column;
        width: 260px;
    }
`;
