import styles from './Order.module.scss';
import { Link, useParams } from 'react-router-dom';
import { fakeOrders } from '../Orders/consts';
import { MdEuroSymbol } from 'react-icons/md';
import { ROUTES } from '../../routes';
import Button from '../../components/Button/Button';
import Approved from '../../assets/approved.png';

const Order = () => {
  const { id } = useParams();
  const order = fakeOrders.find((order) => order.id === parseInt(id));

  if (!order) {
    return (
      <p className={styles.notFoundText}>
        Order with id <span className={styles.bold}>{id}</span> not found.
      </p>
    );
  }

  return (
    <>
      <h2 className={styles.pageTitle}>Order</h2>
      <div className={styles.order}>
        <div className={styles.imageContainer}>
          <img src={order.hotel.imageUrl} alt={order.hotel.title} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{order.hotel.title}</h2>
          <table>
            <tbody>
              <tr>
                <th>Price:</th>
                <td className={styles.price}>
                  {order.price}
                  <MdEuroSymbol />
                </td>
              </tr>
              <tr>
                <th>Location:</th>
                <td>{order.hotel.address}</td>
              </tr>
              <tr>
                <th>Date from:</th>
                <td>{new Date(order.startDate).toLocaleDateString('lt')}</td>
              </tr>
              <tr>
                <th>Date to:</th>
                <td>{new Date(order.endDate).toLocaleDateString('lt')}</td>
              </tr>
              <tr>
                <th>Persons:</th>
                <td>{order.persons.map((person) => person).join(', ')}</td>
              </tr>
            </tbody>
          </table>
          <img className={styles.approved} src={Approved} alt="Approved" />
        </div>
      </div>
      <div className={styles.goBackButtonWrapper}>
        <Link to={ROUTES.ORDERS}>
          <Button>Go back</Button>
        </Link>
      </div>
    </>
  );
};

export default Order;
