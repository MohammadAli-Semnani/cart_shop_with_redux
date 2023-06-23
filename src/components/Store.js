import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

//Redux
import { useDispatch, useSelector } from 'react-redux';
// Style
import styles from "./Store.module.css";
import { useEffect } from 'react';
import fetchProducts from '../redux/prooducts/productsAction';

const Store = () => {

    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchProducts()) 
    },[])

    return (
        <div className={styles.container} >
            {
                productsState.isLoading ?
                    <h1>loading...</h1> :
                productsState.error ?
                        <h1>{productsState.error}</h1> :
                        productsState.products.map(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }
        </div>
    );
};

export default Store;