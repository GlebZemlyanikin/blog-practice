import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import styled from 'styled-components';

const AppColum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1000px;
    min-height: 100%;
    background-color: #fff;
    margin: 0 auto;
`;

const Content = styled.div`
    padding: 120px 0;
`;

const H2 = styled.h2`
    text-align: center;
`;

function App() {
    return (
        <AppColum>
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
        </AppColum>
    );
}

export default App;
