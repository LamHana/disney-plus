import Footer from '@components/Footer';
import Header from '@components/Header';
import { Container } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <Container>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </Container>
    );
};

export default MainLayout;
