import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <h1 className='text-'></h1>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
