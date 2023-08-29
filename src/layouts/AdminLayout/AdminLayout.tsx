import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <div>AdminLayout</div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
