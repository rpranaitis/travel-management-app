import styles from './OrderRow.module.scss';
import PropTypes from 'prop-types';
import { FaEuroSign } from 'react-icons/fa';
import Button from '../../components/Button/Button';

const OrderRow = ({ order }) => {
  return (
    <div key={order.id} className={styles.order}>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <img src={order.hotel.imageUrl} alt={order.hotel.title} />
        </div>
        <div className={styles.details}>
          <div className={styles.hotelDetails}>
            <h3 className={styles.title}>{order.hotel.title}</h3>
            <p>{order.hotel.address}</p>
          </div>
          <div className={styles.otherDetails}>
            <div className={styles.otherDetailsBlock}>
              <span>Price</span>
              <span className={styles.item}>
                {order.price}
                <FaEuroSign />
              </span>
            </div>
            <div className={styles.otherDetailsBlock}>
              <span>Dates</span>
              <span className={styles.item}>
                {new Date(order.startDate).toLocaleDateString('lt') +
                  ' - ' +
                  new Date(order.endDate).toLocaleDateString('lt')}
              </span>
            </div>
            <div className={styles.otherDetailsBlock}>
              <span>Persons</span>
              <span className={styles.item}>{order.persons.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Button>View</Button>
      </div>
    </div>
  );
};

OrderRow.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    hotel: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
    persons: PropTypes.array.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }),
};

export default OrderRow;
