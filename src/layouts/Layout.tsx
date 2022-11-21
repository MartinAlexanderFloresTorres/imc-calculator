import { Outlet } from 'react-router-dom';
import Footer from '../components/containers/Footer';
import Header from '../components/containers/Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
