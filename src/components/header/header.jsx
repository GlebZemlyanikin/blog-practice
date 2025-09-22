import { Logo } from './components/logo';
import { ControlPanel } from './components/control-panel';
import styled from 'styled-components';

const Discription = styled.div`
    font-size: 18px;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
`;

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo />
        <Discription>
            Веб-технологии
            <br />
            Написание кода
            <br />
            Разбор ошибок
        </Discription>
        <ControlPanel />
    </header>
);

export const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 120px;
    padding: 20px 40px;
    box-shadow: 0px -7px 35px 9px rgba(97, 97, 97, 1);
    background-color: #fff;
`;
