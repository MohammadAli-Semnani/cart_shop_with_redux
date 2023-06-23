import axios from "axios"

const fetch_product_request = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}
const fetch_product_success = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}
const fetch_product_faild = (error) => {
    return {
        type: "FETCH_PRODUCTS_FAILD",
        payload: error
    }
}

const fetchProducts = (dispatch) => { 
    return (dispatch) => {

        const BASE_URL = "https://fakestoreapi.com";

        dispatch(fetch_product_request())

        axios.get(`${BASE_URL}/products`)

            .then(response => {
                const products = response.data;
                dispatch(fetch_product_success(products));
            })

            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetch_product_faild(errorMessage))
            })
    }
}

export default fetchProducts;