import OrderRow from './OrderRow';
import styles from './Orders.module.scss';
import { fakeOrders } from './consts';

const Orders = () => {
  return (
    <>
      <h2 className={styles.title}>Orders</h2>
      <div className={styles.container}>
        {fakeOrders.map((order) => (
          <OrderRow order={order} key={order.id} />
        ))}
      </div>
    </>
  );
};

export default Orders;
