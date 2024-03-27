import { Link, useLocation } from 'react-router-dom';
import { ROUTES, navigationBarRoutes } from '../../routes';
import { LuLogOut } from 'react-icons/lu';
import Logo from '../../assets/logo.png';
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        {navigationBarRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={location.pathname === route.path ? styles.active : ''}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <div className={styles.logoutWrapper}>
        <Link to={ROUTES.LOGIN}>
          <LuLogOut />
        </Link>
      </div>
    </header>
  );
};

export default NavigationBar;
