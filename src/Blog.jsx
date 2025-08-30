import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import styled from 'styled-components';
import { Authorization } from './pages/authorization/authorization';
import { Registration } from './pages/registration/registration';
import { Users } from './pages/users/users';

const AppColum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1000px;
    min-height: 100%;
    background-color: #fff;
    margin: 0 auto;
`;

const Page = styled.div`
    padding: 120px 0;
`;

const H2 = styled.h2`
    text-align: center;
`;

function App() {
    return (
        <AppColum>
            <Header />
            <Page>
                <Routes>
                    <Route path="/" element={<div>Главная страница</div>} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/post" element={<div>New Post</div>} />
                    <Route path="/post/:postId" element={<div>PostId</div>} />
                    <Route path="*" element={<div>Error</div>} />
                </Routes>
            </Page>
            <Footer />
        </AppColum>
    );
}

export default App;
