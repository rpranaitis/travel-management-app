import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return children;
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
