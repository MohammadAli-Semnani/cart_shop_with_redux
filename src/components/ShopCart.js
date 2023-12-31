import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from './shared/Cart';


// Style
import styles from "./ShopCart.module.css";
import { checkout, clear } from '../redux/carts/cartsAction';

//Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ShopCart = () => {

    const state = useSelector(state => state.cartsState);
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                        <p><span>Total Items:</span> {state.itemsCounter}</p>
                        <p><span>Total Payments:</span> {state.total} $</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                            <button className={styles.checkout} onClick={() => dispatch(checkout())}>Checkout</button>
                        </div>
                    </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                        <h3>Want to buy?</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
            }
            
        </div>
    );
};

export default ShopCart;