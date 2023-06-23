import React from 'react';

// Components
import Product from './shared/Product';

//Redux
import { useDispatch, useSelector } from 'react-redux';

// Style
import styles from "./Store.module.css";
import { useEffect } from 'react';
import fetchProducts from '../redux/prooducts/productsAction';

//Loder
import Spinner from "../assets/loder/Spinner.gif" 

const Store = () => {

    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()

    useEffect(() => {
        !productsState.products.length && dispatch(fetchProducts())
    },[])

    return (
        <div className={styles.container} >
            {
                productsState.isLoading ?
                    <img className={styles.loder} src={ Spinner } /> :
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