import OrderRow from './OrderRow';
import styles from './Orders.module.scss';
import { fakeOrders } from './consts';

const Orders = () => {
  return (
    <div className={styles.container}>
      {fakeOrders.map((order) => (
        <OrderRow order={order} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;
