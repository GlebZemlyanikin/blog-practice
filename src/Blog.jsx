import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 0;
`;

const H2 = styled.h2`
    text-align: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

function App() {
    return (
        <>
            <Header />
            <Content>
                <H2>Контент страницы</H2>
                <Routes>
                    <Route path="/" element={<div>Главная страница</div>} />
                    <Route path="/login" element={<div>Login</div>} />
                    <Route path="/register" element={<div>Register</div>} />
                    <Route path="/users" element={<div>Users</div>} />
                    <Route path="/post" element={<div>New Post</div>} />
                    <Route path="/post/:postId" element={<div>PostId</div>} />
                    <Route path="*" element={<div>Error</div>} />
                </Routes>
            </Content>
            <Footer />
        </>
    );
}

export default App;
