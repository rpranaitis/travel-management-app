import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(ROUTES.ORDERS);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}>
          <h3 className={styles.loginTitle}>LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">SIGN IN</Button>
          </form>
          <a href="#" className={styles.forgotPasswordText}>
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
