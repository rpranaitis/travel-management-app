import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';
import styles from './NavigationBar.module.scss';
import classNames from 'classnames';

const NavigationBar = () => {
  const location = useLocation();

  const preparedRoutes = [
    {
      path: ROUTES.ORDERS,
      name: 'Orders',
    },
    {
      path: ROUTES.HOTELS,
      name: 'Hotels',
    },
  ];

  return (
    <header className={styles.navHeader}>
      <nav className={styles.nav}>
        {preparedRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={location.pathname === route.path ? styles.active : ''}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <i
        className={classNames(
          'fa-solid',
          'fa-right-from-bracket',
          styles.logoutButton
        )}
      ></i>
    </header>
  );
};

export default NavigationBar;
