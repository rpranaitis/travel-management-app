import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Orders from '../views/Orders/Orders';
import Hotels from '../views/Hotels/Hotels';
import AuthLayout from '../layouts/AuthLayout';
import DefaultLayout from '../layouts/DefaultLayout';

export const ROUTES = {
  LOGIN: '/',
  REGISTER: '/register',
  ORDERS: '/orders',
  HOTELS: '/hotels',
};

export const routes = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
    Layout: DefaultLayout,
  },
  {
    path: ROUTES.REGISTER,
    Component: Register,
    Layout: DefaultLayout,
  },
  {
    path: ROUTES.ORDERS,
    Component: Orders,
    Layout: AuthLayout,
  },
  {
    path: ROUTES.HOTELS,
    Component: Hotels,
    Layout: AuthLayout,
  },
];

export const navigationBarRoutes = [
  {
    name: 'Orders',
    path: ROUTES.ORDERS,
  },
  {
    name: 'Hotels',
    path: ROUTES.HOTELS,
  },
];
