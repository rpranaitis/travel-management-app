import PropTypes from 'prop-types';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
